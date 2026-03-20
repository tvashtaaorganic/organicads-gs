export interface PageData {
    id: number;
    name: string;
    locationin: string;
    cityin: string;
    countryin: string;
    descpost: string;
    cat: string;
    titletag: string;
    descriptiontag: string;
    keywordstag: string;
    slug: string;
    servicename: string;
    date: string;
    parentslug?: string;
    citytype?: string;
    businesstypes?: string;
    nearbyareas?: string;
    landmarks?: string;
    expert_tips?: string;
    faqs_dynamic?: string;
    neighborhood_context?: string;
    local_stats?: string;
}

const GOOGLE_SHEET_ID = '1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y';
const SHEET_NAME = 'pages';

// In-memory cache with 48-hour duration
let cachedData: { pages: PageData[], timestamp: number } | null = null;
const CACHE_DURATION = 172800000; 

function mapCellsToPageData(cells: any[], rowIndex: number = 0): PageData {
    return {
        id: cells[0]?.v || rowIndex + 1,
        name: cells[1]?.v || '',
        locationin: cells[2]?.v || '',
        cityin: cells[3]?.v || '',
        countryin: cells[4]?.v || '',
        descpost: cells[5]?.v || '',
        cat: cells[6]?.v || '',
        titletag: cells[7]?.v || '',
        descriptiontag: cells[8]?.v || '',
        keywordstag: cells[9]?.v || '',
        slug: cells[10]?.v || '',
        servicename: cells[11]?.v || '',
        date: cells[12]?.v || '',
        parentslug: cells[13]?.v || '',
        citytype: cells[14]?.v || '',
        businesstypes: cells[15]?.v || '',
        nearbyareas: cells[16]?.v || '',
        landmarks: cells[17]?.v || '',
        expert_tips: cells[18]?.v || '',
        faqs_dynamic: cells[19]?.v || '',
        neighborhood_context: cells[20]?.v || '',
        local_stats: cells[21]?.v || '',
    };
}

async function fetchRowByQuery(query: string): Promise<PageData | null> {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&tq=${encodedQuery}`;

    try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) return null;

        const text = await response.text();
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);

        if (!data.table || !data.table.rows || data.table.rows.length === 0) return null;

        const cells = data.table.rows[0].c;
        if (!cells) return null;
        
        return mapCellsToPageData(cells);
    } catch (error) {
        console.error('Targeted GQL fetch failed:', error);
        return null;
    }
}

export async function getAllPages(): Promise<PageData[]> {
    if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
        return cachedData.pages;
    }

    console.log('!!! FETCHING ALL PAGES FROM GOOGLE SHEETS (Global Load)');
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const text = await response.text();
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);

        if (!data.table || !data.table.rows) return [];

        const pages: PageData[] = (data.table.rows || []).map((r: any, i: number) => mapCellsToPageData(r.c, i));
        cachedData = { pages, timestamp: Date.now() };
        return pages;
    } catch (error) {
        console.error('Global fetch failed:', error);
        return [];
    }
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
    const originalPath = slug.startsWith('/') ? slug.slice(1) : slug;
    const cleanPath = originalPath.replace(/^services\//, '').toLowerCase();
    
    console.log(`!!! SEARCHING FOR PATH: ${originalPath}`);

    // 1. Direct Slug Match (GQL Query - Letters K is Slug)
    const bySlug = await fetchRowByQuery(`select * where lower(K) = '${cleanPath}' or lower(K) = '${originalPath}'`);
    if (bySlug) return bySlug;

    // 2. Metadata Match (Inferred for Pattern 1-6)
    const parts = cleanPath.split(/[/-]/); // split by slash or dash
    if (parts.length >= 2) {
        // Find most likely location from parts
        const possibleLoc = parts.find(p => p.length > 3 && p !== 'digital' && p !== 'marketing' && p !== 'company' && p !== 'services' && p !== 'agency');
        if (possibleLoc) {
            const byMeta = await fetchRowByQuery(`select * where lower(C) = '${possibleLoc}' or lower(K) contains '${possibleLoc}'`);
            if (byMeta) return byMeta;
        }
    }

    // 3. Fallback to full cache (Ensures all patterns work)
    const all = await getAllPages();
    return all.find(p => {
        const loc = p.locationin.toLowerCase().replace(/\s+/g, '-')
        const city = p.cityin?.toLowerCase().replace(/\s+/g, '-')
        const svc = p.parentslug || 'digital-marketing'
        const nameSlug = p.name.toLowerCase().replace(/\s+/g, '-')

        const patterns = [
            p.slug,                                       // P0
            `services/${p.slug}`,                         // P0 (prefixed)
            `${svc}-company-in-${loc}`,                    // P1
            `services/${svc}-company-in-${loc}`,           // P1 (prefixed)
            `${svc}-company-in-${loc}-${city}`,             // P2
            `${svc}-company-${loc}`,                        // P3
            `${nameSlug}-in-${loc}`,                       // Name Pattern 1
            `${nameSlug}-in-${loc}-${city}`,                // Name Pattern 2
            `${city}/${svc}-services-${loc}`,               // P4
            `${svc}-agency-${loc}`,                         // P5
            `in/${loc}/${svc}-company-in-${city}`,          // P6
            `${svc}-${loc}-${city}`,                        // Dynamic 1
            `${svc}-${loc}`,                                // Dynamic 2
            `services/${svc}/${city}/${loc}`,               // Legacy support
        ];
        return patterns.includes(originalPath) || patterns.includes(cleanPath);
    }) || null;
}

export async function getPageByHierarchy(parentSlug: string, city: string): Promise<PageData | null> {
    const targeted = await fetchRowByQuery(`select * where lower(N) = '${parentSlug}' and lower(D) = '${city.toLowerCase()}'`);
    if (targeted) return targeted;
    const all = await getAllPages();
    return all.find(p => p.parentslug === parentSlug && p.cityin?.toLowerCase() === city.toLowerCase()) || null;
}

export async function getPageByHierarchyWithArea(parentSlug: string, city: string, area: string): Promise<PageData | null> {
    const targeted = await fetchRowByQuery(`select * where lower(N) = '${parentSlug}' and lower(D) = '${city.toLowerCase()}' and lower(C) = '${area.toLowerCase().replace(/-/g, ' ')}'`);
    if (targeted) return targeted;
    const all = await getAllPages();
    return all.find(p => 
        p.parentslug === parentSlug && 
        p.cityin?.toLowerCase() === city.toLowerCase() && 
        (p.locationin?.toLowerCase() === area.toLowerCase().replace(/-/g, ' ') || p.locationin?.toLowerCase().replace(/\s+/g, '-') === area.toLowerCase())
    ) || null;
}

export async function getAllSlugs(): Promise<string[]> {
    const all = await getAllPages();
    return all.map(p => p.slug).filter(Boolean);
}

export async function getTotalCount(): Promise<number> {
    const all = await getAllPages();
    return all.length;
}

export async function getPaginatedPages(limit: number, offset: number): Promise<PageData[]> {
    const all = await getAllPages();
    
    // Sort by date - descending (latest first)
    const sorted = [...all].sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
    });

    return sorted.slice(offset, offset + limit);
}

export function clearCache() {
    cachedData = null;
}

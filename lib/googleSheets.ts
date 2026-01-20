import { unstable_cache } from 'next/cache';

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
    // New fields for programmatic local SEO
    parentslug?: string;
    citytype?: string;
    businesstypes?: string;
    nearbyareas?: string;
    landmarks?: string;
}

const GOOGLE_SHEET_ID = '1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y';
const SHEET_NAME = 'pages';

// Fetch data from Google Sheets (raw, uncached)
async function fetchGoogleSheetData(): Promise<PageData[]> {
    console.log('!!! FETCHING DATA FROM GOOGLE SHEETS');

    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 86400 } // Cache for 24 hours
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Google Sheets: ${response.status}`);
        }

        const text = await response.text();
        // console.log('!!! GOOGLE SHEETS RAW RESPONSE LENGTH:', text.length); // Commented out debug log

        // Google Sheets returns JSONP, we need to extract the JSON
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);

        const rows = data.table.rows;
        const pages: PageData[] = [];

        // Google Sheets API already handles headers, so start from index 0
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.c;

            // Skip empty rows
            if (!cells || cells.length === 0 || !cells[0]?.v) {
                continue;
            }

            pages.push({
                id: cells[0]?.v || i + 1,
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
                date: cells[12]?.v || new Date().toISOString(),
                // New local SEO fields
                parentslug: cells[13]?.v || '',
                citytype: cells[14]?.v || '',
                businesstypes: cells[15]?.v || '',
                nearbyareas: cells[16]?.v || '',
                landmarks: cells[17]?.v || '',
            });
        }

        console.log(`!!! LOADED ${pages.length} PAGES FROM GOOGLE SHEETS`);
        return pages;
    } catch (error) {
        console.error('Error fetching Google Sheets:', error);
        return [];
    }
}

// Cache all pages data for 24 hours (86400 seconds)
const getCachedAllPages = unstable_cache(
    async () => {
        console.log('!!! CACHE MISS: Fetching all pages from Google Sheets');
        return await fetchGoogleSheetData();
    },
    ['google-sheets-all-pages'],
    {
        revalidate: 86400, // Cache for 24 hours
        tags: ['google-sheets-pages'],
    }
);

// Get all pages (cached)
export async function getAllPages(): Promise<PageData[]> {
    try {
        return await getCachedAllPages();
    } catch (error) {
        console.error('Error getting all pages:', error);
        return [];
    }
}

// Get page by slug (uses cached all pages data)
export async function getPageBySlug(slug: string): Promise<PageData | null> {
    try {
        const allPages = await getAllPages();
        const page = allPages.find(p => p.slug === slug);

        if (page) {
            console.log(`!!! FOUND PAGE FOR SLUG: ${slug}`);
        } else {
            console.log(`!!! NO PAGE FOUND FOR SLUG: ${slug}`);
        }

        return page || null;
    } catch (error) {
        console.error('Error fetching page by slug:', error);
        return null;
    }
}

// Get page by hierarchy (parent/city)
// Get page by hierarchy (parent/city)
export async function getPageByHierarchy(parentSlug: string, city: string): Promise<PageData | null> {
    try {
        const allPages = await getAllPages();
        const normalizedCity = city.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        // Filter all pages that match this city
        const cityPages = allPages.filter(p => {
            const parentMatches = p.parentslug === parentSlug;
            const sheetCityNormalized = p.cityin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            // Match via cityin column OR slug endpoint
            const cityMatches = sheetCityNormalized === normalizedCity;
            const slugMatches = p.slug.endsWith(`-${normalizedCity}`) || p.slug.includes(normalizedCity);

            return parentMatches && (cityMatches || slugMatches);
        });

        if (cityPages.length === 0) {
            console.log(`!!! NO HIERARCHICAL PAGE FOUND FOR: ${parentSlug}/${city}`);
            return null;
        }

        // Priority 1: Find page where Location IS the City (e.g. Location: Mysore, City: Mysore)
        // This ensures /services/digital-marketing/mysore loads the "Main" Mysore page, not an area like "Chamundi Hill".
        const mainCityPage = cityPages.find(p => {
            const loc = p.locationin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return loc === normalizedCity;
        });

        if (mainCityPage) {
            console.log(`!!! FOUND MAIN CITY PAGE FOR: ${parentSlug}/${city}`);
            return mainCityPage;
        }

        // Priority 2: Fallback to the first matching page
        console.log(`!!! FOUND FIRST AVAILABLE AREA PAGE FOR CITY: ${parentSlug}/${city}`);
        return cityPages[0];

    } catch (error) {
        console.error('Error fetching page by hierarchy:', error);
        return null; // Closing brace match
    }
}


// Get page by hierarchy with area (parent/city/area)
export async function getPageByHierarchyWithArea(parentSlug: string, city: string, area: string): Promise<PageData | null> {
    try {
        const allPages = await getAllPages();

        const normalizedCity = city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const normalizedArea = area.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const page = allPages.find(p => {
            const parentMatches = p.parentslug === parentSlug;

            // Check city
            const sheetCityNormalized = p.cityin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const cityMatches = sheetCityNormalized === normalizedCity || p.slug.includes(normalizedCity);

            if (!parentMatches || !cityMatches) return false;

            // Check area - normalize the locationin field from the sheet and compare with URL area
            const sheetLocationNormalized = p.locationin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const locationMatches = sheetLocationNormalized === normalizedArea;
            
            // Also check if area exists in slug or name as fallback
            const slugHasArea = p.slug.includes(normalizedArea);
            const nameHasArea = p.name.toLowerCase().includes(normalizedArea.replace(/-/g, ' '));

            return locationMatches || slugHasArea || nameHasArea;
        });

        if (page) {
            console.log(`!!! FOUND AREA PAGE FOR: ${parentSlug}/${city}/${area}`);
        } else {
            console.log(`!!! NO AREA PAGE FOUND FOR: ${parentSlug}/${city}/${area}`);
        }

        return page || null;
    } catch (error) {
        console.error('Error fetching page by area hierarchy:', error);
        return null;
    }
}

// Get all slugs (uses cached all pages data)
export async function getAllSlugs(): Promise<string[]> {
    try {
        const allPages = await getAllPages();
        const slugs = allPages.map(p => p.slug).filter(Boolean);
        console.log(`!!! RETURNING ${slugs.length} SLUGS`);
        return slugs;
    } catch (error) {
        console.error('Error fetching slugs:', error);
        return [];
    }
}

// Get total count (uses cached all pages data)
export async function getTotalCount(): Promise<number> {
    try {
        const allPages = await getAllPages();
        return allPages.length;
    } catch (error) {
        console.error('Error getting total count:', error);
        return 0;
    }
}

// Get paginated pages (uses cached all pages data)
export async function getPaginatedPages(limit: number, offset: number): Promise<PageData[]> {
    try {
        const allPages = await getAllPages();
        const paginatedPages = allPages.slice(offset, offset + limit);
        console.log(`!!! RETURNING ${paginatedPages.length} PAGES (Limit: ${limit}, Offset: ${offset})`);
        return paginatedPages;
    } catch (error) {
        console.error('Error getting paginated pages:', error);
        return [];
    }
}

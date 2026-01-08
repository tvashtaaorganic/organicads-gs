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
}

const GOOGLE_SHEET_ID = '1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y';
const SHEET_NAME = 'pages';

// Fetch data from Google Sheets (raw, uncached)
async function fetchGoogleSheetData(): Promise<PageData[]> {
    console.log('!!! FETCHING DATA FROM GOOGLE SHEETS');

    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 86400 } // Cache for 24 hours at fetch level
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Google Sheets: ${response.status}`);
        }

        const text = await response.text();

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

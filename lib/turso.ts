import { createClient } from '@libsql/client';
import { unstable_cache } from 'next/cache';

const url = process.env.TURSO_DB_URL;
const authToken = process.env.TURSO_DB_TOKEN;

console.log('Turso Config:', {
    url: url ? 'Set' : 'Missing',
    authToken: authToken ? 'Set' : 'Missing'
});

const turso = createClient({
    url: url!,
    authToken: authToken!,
});

export default turso;

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

// Cache the page data fetch for 1 hour
const getCachedPageData = unstable_cache(
    async (servicename: string) => {
        console.log('!!! LIB: FETCHING PAGE DATA FROM DATABASE FOR:', servicename);
        const result = await turso.execute({
            sql: 'SELECT * FROM pages WHERE slug = ? LIMIT 1',
            args: [servicename],
        });

        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return {
            id: row.id as number,
            name: row.name as string,
            locationin: row.locationin as string,
            cityin: row.cityin as string,
            countryin: row.countryin as string,
            descpost: row.descpost as string,
            cat: row.cat as string,
            titletag: row.titletag as string,
            descriptiontag: row.descriptiontag as string,
            keywordstag: row.keywordstag as string,
            slug: row.slug as string,
            servicename: row.servicename as string,
            date: row.date as string,
        };
    },
    ['lib-page-data'],
    {
        revalidate: 3600, // Cache for 1 hour
        tags: ['lib-pages'],
    }
);

export async function getPageByServiceName(servicename: string): Promise<PageData | null> {
    try {
        return await getCachedPageData(servicename);
    } catch (error) {
        console.error('Error fetching page data:', error);
        return null;
    }
}

// Cache the slugs fetch for 1 hour
const getCachedSlugs = unstable_cache(
    async () => {
        console.log('!!! LIB: FETCHING ALL SLUGS FROM DATABASE');
        const result = await turso.execute('SELECT DISTINCT slug FROM pages');
        return result.rows.map((row) => row.slug as string);
    },
    ['lib-all-slugs'],
    {
        revalidate: 3600, // Cache for 1 hour
        tags: ['lib-slugs'],
    }
);

export async function getAllServiceSlugs(): Promise<string[]> {
    try {
        return await getCachedSlugs();
    } catch (error) {
        console.error('Error fetching slugs:', error);
        return [];
    }
}

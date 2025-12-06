import { createClient } from '@libsql/client';

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

export async function getPageByServiceName(servicename: string): Promise<PageData | null> {
    try {
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
    } catch (error) {
        console.error('Error fetching page data:', error);
        return null;
    }
}

export async function getAllServiceSlugs(): Promise<string[]> {
    try {
        const result = await turso.execute('SELECT DISTINCT slug FROM pages');
        return result.rows.map((row) => row.slug as string);
    } catch (error) {
        console.error('Error fetching slugs:', error);
        return [];
    }
}

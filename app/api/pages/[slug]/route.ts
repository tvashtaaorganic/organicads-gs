import { NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';
import turso from '@/lib/turso';

// Cache the database query for 1 hour (3600 seconds)
const getCachedPageBySlug = unstable_cache(
    async (slug: string) => {
        console.log('!!! API: FETCHING DATA FROM DATABASE FOR SLUG:', slug);

        const result = await turso.execute({
            sql: 'SELECT * FROM pages WHERE slug = ? LIMIT 1',
            args: [slug],
        });

        console.log('!!! API: QUERY RESULT ROWS:', result.rows.length);

        if (result.rows.length === 0) {
            return null;
        }

        return result.rows[0];
    },
    ['api-page-slug'], // Cache key prefix
    {
        revalidate: 3600, // Cache for 1 hour
        tags: ['api-pages'], // Tag for cache invalidation
    }
);

export async function GET(req: Request, props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    try {
        const data = await getCachedPageBySlug(slug);

        if (!data) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }

        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error('Turso DB error:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

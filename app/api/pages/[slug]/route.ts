import { NextResponse } from 'next/server';
import { getPageBySlug } from '@/lib/googleSheets';

export async function GET(req: Request, props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    try {
        console.log('!!! API: FETCHING PAGE FOR SLUG:', slug);
        const data = await getPageBySlug(slug);

        if (!data) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }

        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
            },
        });
    } catch (error) {
        console.error('Google Sheets API error:', error);
        return NextResponse.json({ error: 'Data fetch error' }, { status: 500 });
    }
}

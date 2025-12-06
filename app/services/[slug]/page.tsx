import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import DMService from '@/components/services/dm/page';
import SEOService from '@/components/services/seo/page';
import WhatsAppService from '@/components/services/whatsapp/page';
import WebDevService from '@/components/services/webdev/page';
import turso from '@/lib/turso';

async function fetchPageData(slug: string) {
    console.log('!!! FETCHING DATA FOR SLUG:', slug);

    // Direct query without try-catch to see errors
    const result = await turso.execute({
        sql: 'SELECT * FROM pages WHERE slug = ? LIMIT 1',
        args: [slug],
    });

    console.log('!!! QUERY RESULT ROWS:', result.rows.length);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    console.log('!!! GENERATING METADATA FOR:', slug);
    const data = await fetchPageData(slug);

    if (!data) {
        console.log('!!! NO DATA FOUND FOR METADATA');
        return {
            title: 'Page Not Found',
            description: 'This page does not exist.',
        };
    }

    return {
        title: data.titletag as string,
        description: data.descriptiontag as string,
        keywords: (data.keywordstag as string)?.split(',').map((k: string) => k.trim()),
        openGraph: {
            title: data.titletag as string,
            description: data.descriptiontag as string,
            type: 'website',
            locale: 'en_IN',
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    console.log('!!! RENDERING PAGE FOR:', slug);
    const data = await fetchPageData(slug);

    if (!data) {
        console.log('!!! NO DATA FOUND FOR PAGE');
        return notFound();
    }

    const service = {
        id: data.id as number,
        name: data.name as string,
        locationin: data.locationin as string,
        cityin: data.cityin as string,
        countryin: data.countryin as string,
        descpost: data.descpost as string,
        cat: data.cat as string,
        titletag: data.titletag as string,
        descriptiontag: data.descriptiontag as string,
        keywordstag: data.keywordstag as string,
        slug: data.slug as string,
        servicename: data.servicename as string,
        date: data.date as string,
    };

    // Render the correct component based on servicename
    const servicename = service.servicename.toLowerCase();

    if (servicename === 'dm' || servicename.includes('digital')) {
        return <DMService service={service} />;
    } else if (servicename === 'seo') {
        return <SEOService service={service} />;
    } else if (servicename === 'whatsapp') {
        return <WhatsAppService service={service} />;
    } else if (servicename === 'webdev' || servicename.includes('web')) {
        return <WebDevService service={service} />;
    }

    // Default fallback
    return <SEOService service={service} />;
}

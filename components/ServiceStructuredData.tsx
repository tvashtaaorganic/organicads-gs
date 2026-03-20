import Script from 'next/script';

interface ServiceStructuredDataProps {
    serviceName: string;
    serviceType: string;
    description: string;
    locationin: string;
    cityin: string;
    countryin: string;
    slug: string;
}

export default function ServiceStructuredData({
    serviceName,
    serviceType,
    description,
    locationin,
    cityin,
    countryin,
    slug
}: ServiceStructuredDataProps) {

    const displayLoc = locationin ? `${locationin}, ${cityin}` : cityin;

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Organic Ads - ${displayLoc}`,
        "description": description,
        "url": `https://organicads.vercel.app/services/${slug}`,
        "telephone": "+91-7259404569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": locationin || cityin,
            "addressLocality": cityin,
            "addressRegion": countryin === "India" ? "Karnataka" : countryin,
            "addressCountry": "IN"
        },
        "areaServed": [
            { "@type": "City", "name": cityin },
            ...(locationin ? [{ "@type": "Place", "name": locationin }] : [])
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://organicads.vercel.app"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://organicads.vercel.app/#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${serviceName} in ${displayLoc}`,
                "item": `https://organicads.vercel.app/services/${slug}`
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What is ${serviceName} in ${displayLoc}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${serviceName} for businesses in ${displayLoc} involves ${description}`
                }
            },
            {
                "@type": "Question",
                "name": `Why choose Organic Ads for ${serviceName} in ${displayLoc}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We specialize in providing top-tier ${serviceName} services specifically tailored for businesses across ${displayLoc}. With local expertise and a proven track record, we deliver measurable results.`
                }
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Organic Ads Technologies",
        "url": "https://organicads.vercel.app",
        "logo": "https://lh3.googleusercontent.com/pw/AP1GczMg2Z6_rbj-7eLF_n_5bWGVuuC8h2OrL0bSykxN3maKirmB0SKJ7HeWTYov6gWPt5RR4zMLVS1mlTWKy8MepoYL6JNh-SG_7H7-_E8JFkDD2mPQmhc2ZuDLGuMKL4AnMlgEH-tUPXlxbKefiv0QOD0N=w1195-h308-s-no-gm?authuser=0",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7259404569",
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        }
    };

    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="faq-schema-structured"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                strategy="afterInteractive"
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                strategy="afterInteractive"
            />
        </>
    );
}

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

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.organicads.vercel.app"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.organicads.vercel.app/#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${serviceName} in ${cityin}, ${countryin}`,
                "item": `https://www.organicads.vercel.app/services/${slug}`
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What is ${serviceName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": description
                }
            },
            {
                "@type": "Question",
                "name": `Why choose Organic Ads for ${serviceName} in ${cityin}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We specialize in providing top-tier ${serviceName} services to businesses across ${cityin} and ${countryin}. With over 500+ happy clients and presence in 15+ countries, we deliver measurable results.`
                }
            },
            {
                "@type": "Question",
                "name": `How long does it take to see results from ${serviceName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We deliver measurable results within 4 days to 30 days depending on the service type and your specific requirements."
                }
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Organic Ads Technologies",
        "url": "https://www.organicads.vercel.app",
        "logo": "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7259404569",
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": locationin,
            "addressLocality": cityin,
            "addressRegion": countryin === "India" ? "Karnataka" : countryin,
            "postalCode": "562123",
            "addressCountry": "IN"
        }
    };

    return (
        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                strategy="beforeInteractive"
            />
        </>
    );
}

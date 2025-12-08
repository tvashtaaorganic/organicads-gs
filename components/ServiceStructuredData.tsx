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

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceName,
        "name": serviceName,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": "Organic Ads Technologies",
            "url": "https://www.organicads.in",
            "logo": "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
            "telephone": "+91-7259404569",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": locationin,
                "addressLocality": cityin,
                "addressRegion": countryin === "India" ? "Karnataka" : countryin,
                "addressCountry": countryin === "India" ? "IN" : "US"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": cityin,
            "containedIn": {
                "@type": "Country",
                "name": countryin
            }
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": countryin === "India" ? "INR" : "USD",
            "price": "Contact for pricing",
            "url": `https://www.organicads.in/services/${slug}`
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.organicads.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.organicads.in/#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${serviceName} in ${cityin}, ${countryin}`,
                "item": `https://www.organicads.in/services/${slug}`
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
                    "text": "We deliver measurable results within 4 hours to 30 days depending on the service type and your specific requirements."
                }
            },
            {
                "@type": "Question",
                "name": `What areas do you serve for ${serviceName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We provide ${serviceName} services across ${cityin}, ${countryin}, and globally in 15+ countries.`
                }
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `Organic Ads Technologies - ${serviceName}`,
        "image": "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
        "url": `https://www.organicads.in/services/${slug}`,
        "telephone": "+91-7259404569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": locationin,
            "addressLocality": cityin,
            "addressRegion": countryin === "India" ? "Karnataka" : countryin,
            "postalCode": "562123",
            "addressCountry": countryin === "India" ? "IN" : "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0997",
            "longitude": "77.3943"
        },
        "priceRange": "$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500"
        }
    };

    return (
        <>
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    );
}

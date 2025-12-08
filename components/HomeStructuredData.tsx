import Script from 'next/script';

export default function HomeStructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Organic Ads Technologies",
        "alternateName": "OrganicAds",
        "url": "https://www.organicads.in",
        "logo": "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
        "description": "Leading digital marketing and business messaging solutions provider in Bangalore, offering web development, SEO, WhatsApp Business API, RCS messaging, bulk SMS, and chatbot services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nelamangala",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "562123",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0997",
            "longitude": "77.3943"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7259404569",
            "contactType": "Customer Service",
            "areaServed": ["IN", "US", "GB", "AU", "CA"],
            "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
            "https://www.facebook.com/organicads",
            "https://twitter.com/organicads",
            "https://www.linkedin.com/company/organicads"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Organic Ads Technologies",
        "url": "https://www.organicads.in",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.organicads.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Organic Ads Technologies",
        "image": "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
        "@id": "https://www.organicads.in",
        "url": "https://www.organicads.in",
        "telephone": "+91-7259404569",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nelamangala",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "562123",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0997",
            "longitude": "77.3943"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Marketing & Business Messaging Solutions",
        "provider": {
            "@type": "Organization",
            "name": "Organic Ads Technologies"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Web Development",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Next.js Development"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "React Development"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Mobile App Development"
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Digital Marketing",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "SEO Services"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Social Media Ads"
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Business Messaging",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "WhatsApp Business API"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "RCS Messaging"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Bulk SMS"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Voice Solutions"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Chatbot Development"
                            }
                        }
                    ]
                }
            ]
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
            }
        ]
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                strategy="beforeInteractive"
            />
        </>
    );
}

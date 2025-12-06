'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const seoResults = [
    {
        title: 'Skin Clinic Sydney | Google.com.au',
        keywords: [
            { keyword: 'Laser Hair Removal Sydney', ranking: 1 },
            { keyword: 'Best Skin Treatments Sydney', ranking: 4 },
            { keyword: 'Laser Skin Treatment Sydney', ranking: 1 },
            { keyword: 'Best Lip Injections Sydney', ranking: 3 },
            { keyword: 'Acne Scarring Treatment Sydney', ranking: 5 },
        ],
    },
    {
        title: 'Dentist | Google.com',
        keywords: [
            { keyword: 'Emergency dentist ingleside', ranking: 1 },
            { keyword: 'Pediatric dentist ingleside', ranking: 1 },
            { keyword: 'Dentistry for children ingleside', ranking: 1 },
            { keyword: 'Teeth whitening dentist ingleside', ranking: 1 },
            { keyword: 'Dental crown ingleside', ranking: 1 },
        ],
    },
    {
        title: 'E-commerce | Google.com.au',
        keywords: [
            { keyword: 'aquarium store sydney', ranking: 1 },
            { keyword: 'aquarium sales', ranking: 1 },
            { keyword: 'buy aquarium', ranking: 1 },
            { keyword: 'aquarium store sydney', ranking: 1 },
            { keyword: 'aquarium supplies', ranking: 2 },
        ],
    },
    {
        title: 'Pharma Design | Google.co.in',
        keywords: [
            { keyword: 'Pharma Visual Aid', ranking: 1 },
            { keyword: 'pharma leave behind literature', ranking: 2 },
            { keyword: 'pharma product card design', ranking: 2 },
            { keyword: 'pharma visual aid design company', ranking: 3 },
            { keyword: 'pharma visual aid printers', ranking: 3 },
        ],
    },
    {
        title: 'Cold Storage | Google.ae',
        keywords: [
            { keyword: 'Cold Storage in Al Quoz', ranking: 1 },
            { keyword: 'al quoz cold storage', ranking: 1 },
            { keyword: 'Cold Storage for Rent in Dubai', ranking: 3 },
            { keyword: 'cold storage rental', ranking: 4 },
            { keyword: 'Cold storage in Dubai', ranking: 5 },
        ],
    },
    {
        title: 'Physiotherapist | Google.ca',
        keywords: [
            { keyword: 'best physiotherapy sylvan lake', ranking: 3 },
            { keyword: 'sylvan lake physio', ranking: 3 },
            { keyword: 'Sylvan Lake Physiotherapy', ranking: 3 },
            { keyword: 'Physiotherapy Sylvan Lake', ranking: 3 },
            { keyword: 'physiotherapy clinics sylvan lake', ranking: 3 },
        ],
    },
    {
        title: 'Solar | Google.com.au',
        keywords: [
            { keyword: 'best physiotherapy sylvan lake', ranking: 2 },
            { keyword: 'sylvan lake physio', ranking: 3 },
            { keyword: 'Sylvan Lake Physiotherapy', ranking: 3 },
            { keyword: 'Physiotherapy Sylvan Lake', ranking: 5 },
            { keyword: 'physiotherapy clinics sylvan lake', ranking: 5 },
        ],
    },
    {
        title: 'Rental Service | Google.co.in',
        keywords: [
            { keyword: 'luxury bus rental in ahmedabad', ranking: 1 },
            { keyword: 'hire Toyota innova in ahmedabad', ranking: 2 },
            { keyword: 'Hire Tempo Traveller in ahmedabad', ranking: 2 },
            { keyword: 'bus hire in ahmedabad', ranking: 3 },
            { keyword: 'Hire Tempo Traveller in ahmedabad', ranking: 3 },
        ],
    },
    {
        title: 'Software | Google.com.au',
        keywords: [
            { keyword: 'Rfid Solutions Australia', ranking: 2 },
            { keyword: 'rfid australia', ranking: 3 },
            { keyword: 'rfid solutions', ranking: 3 },
            { keyword: 'uhf rfid tags', ranking: 5 },
            { keyword: 'UHF Tag Reader', ranking: 5 },
        ],
    },
    {
        title: 'Travel | Google.com',
        keywords: [
            { keyword: 'Sabarimala vip darshan', ranking: 2 },
            { keyword: 'Amarnath yatra vip darshan', ranking: 2 },
            { keyword: 'Vaishno devi vip tickets & helicopter yatra', ranking: 2 },
            { keyword: 'Vaishno Devi Battery Car Booking', ranking: 4 },
            { keyword: 'Holiday tour packages for prayagraj', ranking: 4 },
        ],
    },
    {
        title: 'E-Commerce | Google.co.in',
        keywords: [
            { keyword: 'bialetti coffee maker india', ranking: 1 },
            { keyword: 'bialetti india', ranking: 1 },
            { keyword: 'aerolatte India', ranking: 1 },
            { keyword: 'bialetti store', ranking: 2 },
            { keyword: 'melitta india', ranking: 2 },
        ],
    },
    {
        title: 'Import - Export | Google.co.in',
        keywords: [
            { keyword: 'Sandstone Manufacturer in India', ranking: 3 },
            { keyword: 'Sandstone Supplier in India', ranking: 3 },
            { keyword: 'Sandstone Exporter in India', ranking: 3 },
            { keyword: 'Marble Supplier in India', ranking: 3 },
            { keyword: 'Granite Manufacturer in India', ranking: 3 },
        ],
    },
    {
        title: 'Blogger | Google.co.in',
        keywords: [
            { keyword: 'top growing sectors in india', ranking: 1 },
            { keyword: 'rpo companies in india', ranking: 1 },
            { keyword: 'famous master chef in india', ranking: 1 },
            { keyword: 'pre wedding location in gujarat', ranking: 3 },
            { keyword: 'jasmine dhunna', ranking: 4 },
        ],
    },
    {
        title: 'Silver Jewellery Store | Google.co.in',
        keywords: [
            { keyword: 'online silver jewellery in Ahmedabad', ranking: 1 },
            { keyword: 'Handcrafted Silver Jewellery in Ahmedabad', ranking: 1 },
            { keyword: 'Online Silver Earrings in Ahmedabad', ranking: 1 },
            { keyword: 'Online Silver Pendant in Ahmedabad', ranking: 1 },
            { keyword: 'Online Silver Bracelet in Ahmedabad', ranking: 1 },
        ],
    },
];

export default function SEOResults() {
    const [showAll, setShowAll] = useState(false);
    const displayedResults = showAll ? seoResults : seoResults.slice(0, 4);

    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Check Out Few Of Our <span className="gradient-text">Latest SEO Results</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Till now we have served more than 300+ clients and Improve conversion by ranking on Top 10 search results in Google.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayedResults.map((result, index) => (
                        <motion.div
                            key={index}
                            className="border border-border rounded-xl p-6 shadow-lg bg-card hover:border-primary/50 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-semibold mb-4 text-center text-card-foreground">
                                {result.title}
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-border">
                                    <thead>
                                        <tr className="bg-primary/10">
                                            <th className="border border-border px-4 py-2 text-center font-semibold text-card-foreground">
                                                Keywords
                                            </th>
                                            <th className="border border-border px-4 py-2 text-center font-semibold text-card-foreground">
                                                Current Ranking
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result.keywords.map((item, idx) => (
                                            <tr key={idx} className="border border-border hover:bg-muted/50 transition-colors">
                                                <td className="border border-border px-4 py-2 text-card-foreground">
                                                    {item.keyword}
                                                </td>
                                                <td className="border border-border px-4 py-2 text-center">
                                                    <span className={`font-bold ${item.ranking <= 3 ? 'text-primary' : 'text-card-foreground'}`}>
                                                        {item.ranking}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                        className="border-primary/30 hover:bg-primary/10"
                    >
                        {showAll ? (
                            <>
                                View Less <ChevronUp className="ml-2 w-5 h-5" />
                            </>
                        ) : (
                            <>
                                View More Results <ChevronDown className="ml-2 w-5 h-5" />
                            </>
                        )}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

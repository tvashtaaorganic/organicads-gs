'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Shield, TrendingUp, Users, MapPin } from 'lucide-react';

interface WhyChooseUsLocalProps {
    serviceName: string;
    cityin: string;
    citytype?: string;
}

export default function WhyChooseUsLocal({ serviceName, cityin, citytype = 'town' }: WhyChooseUsLocalProps) {
    const getReasons = () => {
        const baseReasons = [
            {
                title: `Local Expertise in ${cityin}`,
                description: `We understand the ${cityin} market dynamics, bringing you solutions that resonate with local customers.`,
                icon: <MapPin className="w-8 h-8 text-blue-500" />
            },
            {
                title: 'Proven Track Record',
                description: `Join successfully growing businesses in ${cityin} who trust our strategies.`,
                icon: <TrendingUp className="w-8 h-8 text-green-500" />
            },
            {
                title: 'Dedicated Support',
                description: `Fast, reliable support specifically for our ${cityin} clients.`,
                icon: <Users className="w-8 h-8 text-purple-500" />
            }
        ];

        if (citytype === 'metro') {
            return [
                ...baseReasons,
                {
                    title: 'Scalable Solutions',
                    description: 'Built to handle high traffic and competitive metro markets.',
                    icon: <Zap className="w-8 h-8 text-yellow-500" />
                }
            ];
        } else if (citytype === 'tourist-city') {
            return [
                ...baseReasons,
                {
                    title: 'Visitor Focused',
                    description: 'Strategies to attract and convert tourists in your city.',
                    icon: <Zap className="w-8 h-8 text-orange-500" />
                }
            ];
        } else {
            return [
                ...baseReasons,
                {
                    title: 'Affordable Growth',
                    description: 'Cost-effective solutions tailored for growing local businesses.',
                    icon: <Shield className="w-8 h-8 text-red-500" />
                }
            ];
        }
    };

    const reasons = getReasons();

    return (
        <section className="py-24 px-4 bg-white dark:bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Why <span className="text-blue-600 dark:text-blue-400 border-b-4 border-blue-200 dark:border-blue-900">{cityin}</span> Businesses Trust Us
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We combine global quality with deep local understanding to deliver the best {serviceName.toLowerCase()} services in {cityin}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            className="group hover:-translate-y-2 transition-all duration-300 border-gray-300 dark:border-gray-800 shadow-sm hover:shadow-xl bg-white dark:bg-card overflow-hidden gap-0 py-0"
                        >
                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardContent className="p-8">
                                <div className="mb-6 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 w-fit group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

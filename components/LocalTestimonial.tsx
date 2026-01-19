'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

interface LocalTestimonialProps {
    serviceName: string;
    cityin: string;
    citytype?: string;
}

export default function LocalTestimonial({ serviceName, cityin, citytype = 'town' }: LocalTestimonialProps) {
    // Generate dynamic testimonial based on city type
    const getTestimonialText = () => {
        const serviceType = serviceName.toLowerCase();

        switch (citytype) {
            case 'metro':
                return `Working with this team for our ${serviceType} needs in ${cityin} was a game-changer. They understood the competitive metro market and delivered a solution that helped us stand out. The professionalism and technical expertise were outstanding.`;
            case 'district-hq':
                return `Our business in ${cityin} needed a professional ${serviceType} solution to attract customers locally and expand our reach. The team delivered exactly what we needed with excellent support and understanding of our district market.`;
            case 'tourist-city':
                return `As a tourism-focused business in ${cityin}, we needed ${serviceType} that could showcase our offerings beautifully. The team created something that truly represents the essence of ${cityin} and has significantly increased our bookings.`;
            case 'industrial':
                return `Our manufacturing unit in ${cityin} required modern ${serviceType} to connect with B2B clients. The team delivered a robust, professional solution that has enhanced our credibility and helped us reach new markets.`;
            default:
                return `Our business in ${cityin} needed professional ${serviceType} to establish an online presence and compete digitally. The team provided personalized support, affordable pricing, and delivered results that exceeded our expectations.`;
        }
    };

    const getClientName = () => {
        switch (citytype) {
            case 'metro': return `CEO, ${cityin} Tech`;
            case 'district-hq': return `Director, ${cityin} Retail`;
            case 'tourist-city': return `Manager, ${cityin} Resorts`;
            case 'industrial': return `Head of Ops, ${cityin} Ind.`;
            default: return `Owner, ${cityin} Enterprises`;
        }
    };

    return (
        <section className="py-24 px-4 bg-secondary/5 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Trusted by <span className="text-primary">{cityin}</span> Businesses
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        See how we're transforming businesses across the {cityin} region.
                    </p>
                </div>

                <div className="relative">
                    <Card className="border-none shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-visible">
                        <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl transform -rotate-6">
                            <Quote className="w-8 h-8" />
                        </div>

                        <CardContent className="p-8 md:p-12 pt-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex justify-center md:justify-start gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground">
                                        "{getTestimonialText()}"
                                    </blockquote>

                                    <div className="flex items-center justify-center md:justify-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                                            {getClientName().charAt(0)}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-lg text-foreground">
                                                {getClientName()}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                Verified Client from {cityin}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border border-primary/10">
                                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                    <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6">Client Satisfaction</div>
                                    <div className="h-px w-full bg-border mb-6"></div>
                                    <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                                    <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Average Rating</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

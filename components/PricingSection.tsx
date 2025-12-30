'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingPlan {
    name: string;
    price: string;
    description: string;
    popular?: boolean;
    savings?: string;
    features: string[];
}

const pricingData = {
    'Website Design': {
        yearly: [
            {
                name: 'Basic',
                price: '₹7,000',
                description: 'Perfect for startups and small businesses',
                features: [
                    'Up to 5-6 pages',
                    'Responsive design',
                    'Basic SEO setup',
                    'Contact form',
                    '12 months support',
                    'Social media integration',
                    'Domain for 1 year',
                    'Hosting for 1 Year'
                ]
            },
            {
                name: 'Professional',
                price: '₹15,000',
                description: 'For growing businesses',
                popular: true,
                features: [
                    'Up to 15-16 pages',
                    'Advanced responsive design',
                    'SEO optimization',
                    '12 months support',
                    'Analytics setup',
                    'Speed optimization',
                    'Security features',
                    'Social media integration',
                    'Domain for 1 year',
                    'Hosting for 1 Year'
                ]
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'Tailored for large organizations',
                features: [
                    'Unlimited pages',
                    'Custom features',
                    'Advanced SEO',
                    '12 months support',
                    'Dedicated manager',
                    'Priority support',
                    'Custom integrations',
                    'Social media integration',
                    'Domain for 1 year',
                    'Hosting for 1 Year',
                    'API integrations',
                    'Performance optimization',
                    'Advanced security features',
                    'Multi-language support',
                    'Custom admin panel'
                ]
            }
        ]
    },
    'SEO': {
        monthly: [
            {
                name: 'Starter',
                price: '₹6,000',
                description: 'For small websites',
                features: [
                    'Up to 10 keywords',
                    'On-page optimization',
                    'Monthly reports',
                    'Basic link building',
                    'Google My Business setup',
                    'Expected google results min 1 months',
                    'Guaranteed results'
                ]
            },
            {
                name: 'Growth',
                price: '₹22,000',
                description: 'For competitive markets',
                popular: true,
                features: [
                    'Up to 35 keywords',
                    'Advanced on-page SEO',
                    'Content optimization',
                    'Link building',
                    'Competitor analysis',
                    'Weekly reports',
                    'Technical SEO audit',
                    'Google Analytics setup',
                    'Google Search Console setup',
                    'Schema markup implementation',
                    'Rich snippets optimization',
                    'Expected google results min 1 Week',
                    'Guaranteed results'
                ]
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale SEO',
                features: [
                    'Unlimited keywords',
                    'Full SEO management',
                    'Content creation',
                    'Advanced link building',
                    'Daily monitoring',
                    'Dedicated SEO team',
                    'Custom strategy',
                    'Expected google results within 1 Day',
                    'Advanced SEO backend tools',
                    'Priority support',
                    'Guaranteed results',
                    'Google Analytics advanced setup',
                    'Google Tag Manager setup',
                    'Advanced schema markup',
                    'Rich snippets & featured snippets',
                    'Google Review management',
                    'Local SEO optimization',
                    'Voice search optimization',
                    'Mobile SEO optimization',
                    'International SEO (if needed)'
                ]
            }
        ],
        yearly: [
            {
                name: 'Starter',
                price: '₹60,000',
                description: 'For small websites',
                savings: 'Save 20%',
                features: [
                    'Up to 10 keywords',
                    'On-page optimization',
                    'Monthly reports',
                    'Basic link building',
                    'Google My Business setup',
                    '12 months commitment',
                    'Expected google results min 1 months',
                    'Guaranteed results'
                ]
            },
            {
                name: 'Growth',
                price: '₹2,20,000',
                description: 'For competitive markets',
                popular: true,
                savings: 'Save 20%',
                features: [
                    'Up to 35 keywords',
                    'Advanced on-page SEO',
                    'Content optimization',
                    'Link building',
                    'Competitor analysis',
                    'Weekly reports',
                    'Technical SEO audit',
                    'Priority support',
                    'Google Analytics setup',
                    'Google Search Console setup',
                    'Schema markup implementation',
                    'Rich snippets optimization',
                    'Expected google results min 1 Week',
                    'Guaranteed results'
                ]
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale SEO',
                features: [
                    'Unlimited keywords',
                    'Full SEO management',
                    'Content creation',
                    'Advanced link building',
                    'Daily monitoring',
                    'Dedicated SEO team',
                    'Custom strategy',
                    'Guaranteed results',
                    'Expected google results within 1 Day',
                    'Advanced SEO backend tools',
                    'Priority support',
                    'Google Analytics advanced setup',
                    'Google Tag Manager setup',
                    'Advanced schema markup',
                    'Rich snippets & featured snippets',
                    'Google Review management',
                    'Local SEO optimization',
                    'Voice search optimization',
                    'Mobile SEO optimization',
                    'International SEO (if needed)'
                ]
            }
        ]
    },
    'E-commerce': {
        yearly: [
            {
                name: 'Starter Store',
                price: '₹15,000',
                description: 'For new online stores',
                features: [
                    'Up to 50 products',
                    'Payment gateway',
                    'Custom design',
                    'Mobile responsive',
                    '12 months support',
                    'Free updates',
                    'Domain for 1 year',
                    'Hosting for 1 Year',
                    'App need means Extra Chargers*'
                ]
            },
            {
                name: 'Professional Store',
                price: '₹25,000',
                description: 'For growing stores',
                popular: true,
                features: [
                    'Up to 500 products',
                    'Multiple payment gateways',
                    'Premium design',
                    'Inventory management',
                    'SEO optimization',
                    '12 months support',
                    'Email marketing',
                    'Marketing automation',
                    'Domain for 1 year',
                    'Hosting for 1 Year',
                    'App need means Extra Chargers*'
                ]
            },
            {
                name: 'Enterprise Store',
                price: 'Custom',
                description: 'For large marketplaces',
                features: [
                    'Unlimited products',
                    'Multi-vendor support',
                    'Advanced features',
                    'Custom integrations',
                    '12 months support',
                    'Dedicated manager',
                    'Priority support',
                    'Domain for 1 year',
                    'Hosting for 1 Year',
                    'App need means Extra Chargers*',
                    'Readymade design available',
                    'Payment gateway integrations',
                    'Inventory management system',
                    'Order tracking system',
                    'Customer loyalty program',
                    'Advanced analytics dashboard'
                ]
            }
        ]
    },
    'Digital Marketing': {
        monthly: [
            {
                name: 'Basic',
                price: '₹10,000',
                description: 'For small campaigns',
                features: [
                    'Social media management',
                    'Basic content creation',
                    '2 platforms',
                    'Monthly reports',
                    'Email support',
                    'Guaranteed results',
                    'Expected results within 1 month',
                    'Up to 5 SEO keywords',
                    'On-page optimization'
                ]
            },
            {
                name: 'Professional',
                price: '₹35,000',
                description: 'For comprehensive marketing',
                popular: true,
                features: [
                    'Multi-channel marketing upto 5 platforms',
                    'Content creation',
                    'All major platforms',
                    'Ad campaign management',
                    'Weekly reports',
                    'Analytics & insights',
                    'Priority support',
                    'Guaranteed results',
                    'Expected results within 1 Week',
                    'Up to 10 SEO keywords',
                    'On-page optimization'
                ]
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale campaigns',
                features: [
                    'Full-service marketing',
                    'Custom strategy',
                    'All platforms (10+ platforms)',
                    'Dedicated team',
                    'Daily monitoring',
                    'Advanced analytics',
                    '24/7 support',
                    'Guaranteed results',
                    'Expected results within 3 Days',
                    'Unlimited SEO keywords',
                    'Advanced on-page & off-page SEO',
                    'Content marketing strategy',
                    'Influencer marketing'
                ]
            }
        ],
        yearly: [
            {
                name: 'Basic',
                price: '₹1,00,000',
                description: 'For small campaigns',
                savings: 'Save 20%',
                features: [
                    'Social media management',
                    'Basic content creation',
                    '2 platforms',
                    'Monthly reports',
                    'Email support',
                    '12 months commitment',
                    'Expected results within 1 month',
                    'Up to 5 SEO keywords',
                    'On-page optimization'
                ]
            },
            {
                name: 'Professional',
                price: '₹3,50,000',
                description: 'For comprehensive marketing',
                popular: true,
                savings: 'Save 20%',
                features: [
                    'Multi-channel marketing upto 5 platforms',
                    'Content creation',
                    'All major platforms',
                    'Ad campaign management',
                    'Weekly reports',
                    'Analytics & insights',
                    'Priority support',
                    'Quarterly strategy review',
                    'Guaranteed results',
                    'Expected results within 1 Week',
                    'Up to 10 SEO keywords',
                    'On-page optimization'
                ]
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale campaigns',
                features: [
                    'Full-service marketing',
                    'Custom strategy',
                    'All platforms (10+ platforms)',
                    'Dedicated team',
                    'Daily monitoring',
                    'Advanced analytics',
                    '24/7 support',
                    'Guaranteed ROI',
                    'Guaranteed results',
                    'Expected results within 3 Days',
                    'Unlimited SEO keywords',
                    'Advanced on-page & off-page SEO',
                    'Content marketing strategy',
                    'Influencer marketing',
                    '12 months commitment'
                ]
            }
        ]
    }
};

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState('Website Design');
    // Set initial billing cycle to 'yearly' since Website Design is the default tab
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    const tabs = ['Website Design', 'E-commerce', 'SEO', 'Digital Marketing'];

    const hasMonthly = activeTab === 'SEO' || activeTab === 'Digital Marketing';

    // Get current pricing - this will recalculate whenever activeTab or billingCycle changes
    const serviceData = pricingData[activeTab as keyof typeof pricingData];
    const currentPricing = (billingCycle === 'monthly' && 'monthly' in serviceData)
        ? serviceData.monthly
        : serviceData.yearly;

    return (
        <section id="pricing" className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-background">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                        Our <span className="gradient-text">Pricing Plans</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs
                    </p>
                </motion.div>

                {/* Service Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                // Set billing cycle based on tab
                                if (tab === 'Website Design' || tab === 'E-commerce') {
                                    setBillingCycle('yearly');
                                } else if (tab === 'SEO' || tab === 'Digital Marketing') {
                                    setBillingCycle('monthly');
                                }
                            }}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab
                                ? 'bg-white dark:bg-card text-foreground shadow-lg'
                                : 'bg-transparent text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Monthly/Yearly Toggle */}
                {hasMonthly && (
                    <div className="flex justify-center items-center gap-3 mb-16">
                        <span className={`font-medium ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            className={`relative w-14 h-7 rounded-full transition-colors ${billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                        >
                            <span
                                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform shadow-md ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'
                                    }`}
                            />
                        </button>
                        <span className={`font-medium ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Yearly
                        </span>
                    </div>
                )}

                {/* Popular Label */}
                <div className="max-w-6xl mx-auto mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div></div>
                        <div className="flex justify-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full px-4 py-1 text-sm font-semibold">
                                Most popular
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {currentPricing.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 bg-white dark:bg-card transition-all duration-300 ${plan.popular
                                ? 'border-2 border-blue-500 shadow-xl'
                                : 'border border-gray-200 dark:border-border shadow-md'
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                            <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                                {plan.price !== 'Custom' && (
                                    <span className="text-muted-foreground text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                                )}
                            </div>

                            <Button
                                onClick={() => {
                                    const billingText = billingCycle === 'monthly' ? 'Monthly' : 'Yearly';
                                    const priceText = plan.price === 'Custom' ? 'Custom pricing' : `${plan.price}/${billingCycle === 'monthly' ? 'month' : 'year'}`;
                                    const message = plan.price === 'Custom'
                                        ? `Hi, I'm interested in the ${plan.name} plan for ${activeTab}. I'd like to discuss custom pricing options.`
                                        : `Hi, I'm interested in the ${plan.name} plan for ${activeTab}. Price: ${priceText} (${billingText} billing). Please provide more details.`;
                                    const whatsappUrl = `https://wa.me/917259404569?text=${encodeURIComponent(message)}`;
                                    window.open(whatsappUrl, '_blank');
                                }}
                                className={`w-full mb-6 ${plan.popular
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                                    }`}
                            >
                                {plan.price === 'Custom' ? 'Contact Sales' : 'Get started'}
                            </Button>

                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

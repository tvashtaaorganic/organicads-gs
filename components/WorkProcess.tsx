'use client';

import { motion } from 'framer-motion';

const processSteps = [
    {
        step: '01',
        title: 'Discovery & Research',
        description: 'Understanding your business goals, target audience, and market landscape',
        color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700'
    },
    {
        step: '02',
        title: 'Strategy Development',
        description: 'Creating data-driven strategies and roadmap for success',
        color: 'bg-purple-50 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700'
    },
    {
        step: '03',
        title: 'Design & Development',
        description: 'Building beautiful, functional solutions with cutting-edge technology',
        color: 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700'
    },
    {
        step: '04',
        title: 'Launch & QA',
        description: 'Rigorous testing, optimization, and successful deployment',
        color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-300 dark:border-orange-700'
    }
];

export default function WorkProcess() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Work Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                        Our <span className="gradient-text">Solution Process</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Experience Excellence: Your Leading Digital Solutions Provider. We are a leading digital agency.
                    </p>
                </motion.div>

                {/* Desktop Horizontal Flow */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-4 gap-6 relative">
                        {/* Dotted Lines Between Cards */}
                        <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 flex items-center" style={{ zIndex: 0 }}>
                            <div className="w-full border-t-2 border-dashed border-border" />
                        </div>

                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`relative ${step.color} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ zIndex: 1 }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-md">
                                        <span className="text-lg font-bold text-primary">{step.step}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground font-semibold">Step</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile View - Simple Cards */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`${step.color} border-2 rounded-2xl p-6 shadow-lg`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-md">
                                    <span className="text-lg font-bold text-primary">{step.step}</span>
                                </div>
                                <span className="text-xs text-muted-foreground font-semibold">Step</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Service-specific content configuration
export interface ServiceConfig {
    badge: string;
    badgeColor: string;
    contentSections: {
        title: string;
        content: string;
    }[];
}

export function getServiceConfig(serviceName: string, name: string, locationin: string, cityin: string, countryin: string): ServiceConfig {
    const sn = serviceName.toLowerCase();

    // RCS Messaging
    if (sn.includes('rcs')) {
        return {
            badge: 'Next-Gen Rich Communication Services - App-Like SMS Experience!',
            badgeColor: 'bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `RCS (Rich Communication Services) is the next evolution of SMS messaging, offering interactive, app-like experiences directly in your customers' default messaging app. Our ${name} services in ${locationin}, ${cityin}, ${countryin} include verified sender badges, rich media carousels, suggested replies, and real-time analytics to transform how you communicate with customers.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We specialize in providing enterprise-grade RCS messaging solutions across ${cityin} and ${countryin}. With features like branded messaging, read receipts, typing indicators, and high-resolution images, we help businesses achieve up to 300% higher engagement rates compared to traditional SMS. Our platform ensures 99.9% delivery rates with comprehensive analytics.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our proven RCS implementation process includes sender verification, message template design, carousel creation, analytics setup, and campaign optimization. We handle all technical aspects including carrier approvals, compliance requirements, and integration with your existing systems for seamless deployment.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Increase customer engagement with interactive buttons, rich media content, and verified business identity. Drive conversions with suggested actions, appointment scheduling, and product catalogs directly in messages. Track performance with detailed analytics including read rates, click-through rates, and conversion metrics.`
                }
            ]
        };
    }

    // Backend & Cloud
    if (sn.includes('backend') || sn.includes('cloud')) {
        return {
            badge: 'Scalable AWS Infrastructure - 99.99% Uptime Guaranteed!',
            badgeColor: 'bg-indigo-600/20 border-indigo-600/40 hover:bg-indigo-600/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} encompasses robust server infrastructure, database management, and cloud architecture designed to power modern applications. Our services in ${locationin}, ${cityin}, ${countryin} include AWS deployment, database optimization (Turso, SQL Server, PostgreSQL), Node.js backend development, and microservices architecture.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We deliver enterprise-grade cloud solutions with 99.99% uptime guarantees, auto-scaling capabilities, and advanced security measures. Our expertise spans AWS services, serverless computing, API development, and real-time data processing, ensuring your application handles millions of requests with lightning-fast response times.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our development process includes infrastructure planning, database schema design, API architecture, security implementation, performance optimization, and continuous monitoring. We follow best practices for scalability, reliability, and cost optimization to deliver future-proof backend solutions.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Scale effortlessly with auto-scaling infrastructure, reduce costs with optimized resource usage, ensure data security with enterprise-grade encryption, and maintain high availability with redundant systems. Our solutions provide real-time analytics, automated backups, and disaster recovery capabilities.`
                }
            ]
        };
    }

    // Bulk SMS
    if (sn.includes('bulk sms') || sn.includes('sms')) {
        return {
            badge: 'Enterprise SMS Platform - 98%+ Delivery Rates Globally!',
            badgeColor: 'bg-green-500/20 border-green-500/40 hover:bg-green-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} is an enterprise messaging platform that enables businesses in ${locationin}, ${cityin}, ${countryin} to send promotional and transactional messages at scale. Our platform supports personalized messaging, scheduled campaigns, two-way SMS, and comprehensive delivery reports across 200+ countries.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We provide 98%+ delivery rates with dedicated sender IDs, DND scrubbing, and real-time analytics. Our platform includes API integration, message templates, contact management, and automated campaigns to help you reach millions of customers instantly and cost-effectively.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our implementation includes sender ID registration, template approval, contact list management, campaign scheduling, and performance tracking. We ensure compliance with telecom regulations and provide dedicated support for optimal campaign performance.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Reach customers instantly with OTP verification, appointment reminders, marketing campaigns, and emergency alerts. Track delivery status, click rates, and conversions with detailed analytics. Scale your messaging effortlessly with our reliable infrastructure.`
                }
            ]
        };
    }

    // Chatbot
    if (sn.includes('chatbot') || sn.includes('bot')) {
        return {
            badge: 'AI-Powered Chatbots - 24/7 Automated Customer Support!',
            badgeColor: 'bg-purple-500/20 border-purple-500/40 hover:bg-purple-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} leverages advanced AI and NLP to automate customer interactions across WhatsApp, websites, Facebook Messenger, and mobile apps. Our intelligent bots in ${locationin}, ${cityin}, ${countryin} understand context, handle complex queries, and provide 24/7 support while integrating seamlessly with your CRM.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `Our chatbots reduce support costs by 60% while improving customer satisfaction. Features include multilingual support, sentiment analysis, human handoff, payment processing, appointment booking, and lead qualification with continuous learning capabilities.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `We design conversation flows, train AI models, integrate with your systems, test extensively, and deploy with ongoing optimization. Our process ensures natural, helpful interactions that feel human while handling thousands of conversations simultaneously.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Provide instant responses 24/7, handle unlimited conversations simultaneously, qualify leads automatically, process payments securely, and gather valuable customer insights. Reduce response times from hours to seconds while maintaining high satisfaction rates.`
                }
            ]
        };
    }

    // Digital Marketing
    if (sn.includes('digital marketing') || sn.includes('dm')) {
        return {
            badge: 'Data-Driven Digital Marketing - Measurable ROI in 30 Days!',
            badgeColor: 'bg-orange-500/20 border-orange-500/40 hover:bg-orange-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} encompasses comprehensive online marketing strategies including social media management, PPC advertising, email marketing, and content creation. Our services in ${locationin}, ${cityin}, ${countryin} are designed to target your ideal audience and deliver measurable results across all digital channels.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We deliver data-driven campaigns with proven ROI across ${cityin} and ${countryin}. Our expertise spans Facebook Ads, Google Ads, LinkedIn marketing, content strategy, and analytics to ensure every marketing dollar contributes to your business growth.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our process includes market research, audience targeting, campaign creation, A/B testing, performance monitoring, and continuous optimization. We use advanced analytics to track conversions and adjust strategies for maximum impact.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Build brand awareness, generate high-quality leads, increase website traffic, improve conversion rates, and grow revenue. Our integrated approach ensures consistent messaging across all channels while maximizing your marketing ROI.`
                }
            ]
        };
    }

    // Mobile App
    if (sn.includes('mobile app') || sn.includes('app')) {
        return {
            badge: 'Native & Cross-Platform Apps - App Store Ready Solutions!',
            badgeColor: 'bg-cyan-500/20 border-cyan-500/40 hover:bg-cyan-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} includes native iOS and Android development, cross-platform solutions using React Native and Flutter, and progressive web apps. Our services in ${locationin}, ${cityin}, ${countryin} cover UX/UI design, backend integration, payment gateways, push notifications, and App Store optimization.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We build high-performance mobile applications with offline capabilities, real-time sync, and seamless user experiences. Whether you need e-commerce apps, social platforms, on-demand services, or enterprise solutions, we deliver apps that drive engagement and retention.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our development process includes requirement analysis, UX/UI design, development, testing, deployment, and post-launch support. We follow agile methodologies to ensure timely delivery and incorporate feedback throughout the development cycle.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Reach customers on their preferred devices, enable offline functionality, send push notifications, process payments securely, and gather user analytics. Our apps are optimized for performance, security, and user satisfaction.`
                }
            ]
        };
    }

    // Multi-Channel
    if (sn.includes('multi-channel') || sn.includes('omnichannel')) {
        return {
            badge: 'Unified Omnichannel Platform - Seamless Customer Experience!',
            badgeColor: 'bg-pink-500/20 border-pink-500/40 hover:bg-pink-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} integrates SMS, WhatsApp, Email, Voice, RCS, and social media into a single powerful platform. Our omnichannel solutions in ${locationin}, ${cityin}, ${countryin} ensure consistent messaging across all touchpoints with centralized analytics and automated workflows.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We deliver unified customer experiences with intelligent routing, cross-channel campaigns, and real-time engagement tracking. Our platform improves conversion rates by 40% through coordinated multi-channel strategies and personalized customer journeys.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our implementation includes channel integration, workflow automation, customer journey mapping, analytics setup, and team training. We ensure seamless communication across all channels while maintaining data consistency and compliance.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Provide consistent experiences across all channels, automate customer journeys, reduce operational complexity, improve response times, and gain comprehensive insights. Our platform enables personalized engagement at scale.`
                }
            ]
        };
    }

    // SEO
    if (sn.includes('seo') || sn.includes('search engine')) {
        return {
            badge: 'Top Google & Bing Rankings in 4 Days!',
            badgeColor: 'bg-emerald-500/20 border-emerald-500/40 hover:bg-emerald-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} is a comprehensive digital solution designed to improve your website's visibility in search engines. Our services in ${locationin}, ${cityin}, ${countryin} include keyword research, on-page optimization, link building, content strategy, and technical SEO to drive organic traffic and improve rankings.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We specialize in providing top-tier SEO services to businesses across ${cityin} and ${countryin}. With over 500+ happy clients and presence in 15+ countries, we deliver measurable results using the latest SEO tools and trends to dominate search results.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our proven process includes SEO audit, keyword research, competitor analysis, on-page optimization, content creation, link building, and continuous monitoring. We use data-driven strategies to improve your search rankings and organic traffic.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Increase organic traffic, improve search rankings, boost conversions, and grow revenue with our SEO services. We focus on delivering tangible results including higher visibility, qualified leads, and improved ROI from organic search.`
                }
            ]
        };
    }

    // Social Media Ads
    if (sn.includes('social media ads') || sn.includes('social')) {
        return {
            badge: 'High-Converting Social Ads - 5X ROAS Guaranteed!',
            badgeColor: 'bg-rose-500/20 border-rose-500/40 hover:bg-rose-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} includes creating and managing high-converting ad campaigns across Facebook, Instagram, LinkedIn, Twitter, and TikTok. Our services in ${locationin}, ${cityin}, ${countryin} cover audience targeting, creative design, A/B testing, retargeting, and detailed performance analytics.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We deliver 5X ROAS through strategic ad placement, compelling creatives, and continuous optimization. Our data-driven approach reduces cost-per-acquisition while scaling results for brand awareness, lead generation, and e-commerce sales.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our process includes audience research, campaign strategy, creative development, ad setup, performance monitoring, and optimization. We test multiple variations to identify winning combinations and scale successful campaigns.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Reach your target audience precisely, increase brand awareness, generate qualified leads, drive e-commerce sales, and track ROI with detailed analytics. Our campaigns are optimized for maximum performance and cost-efficiency.`
                }
            ]
        };
    }

    // UI/UX Design
    if (sn.includes('ui') || sn.includes('ux') || sn.includes('design')) {
        return {
            badge: 'Award-Winning UI/UX Design - Conversion-Focused Interfaces!',
            badgeColor: 'bg-violet-500/20 border-violet-500/40 hover:bg-violet-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} combines beautiful aesthetics with seamless functionality to create intuitive user experiences. Our services in ${locationin}, ${cityin}, ${countryin} include user research, wireframing, prototyping, usability testing, and design systems for websites, mobile apps, and SaaS dashboards.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We focus on user-centered design principles that increase engagement and conversion rates. Our designs are responsive, accessible, and optimized for performance, ensuring users enjoy every interaction while achieving your business objectives.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our process includes user research, persona development, information architecture, wireframing, visual design, prototyping, usability testing, and design handoff. We iterate based on user feedback to create optimal experiences.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Improve user satisfaction, increase conversion rates, reduce bounce rates, enhance brand perception, and create memorable experiences. Our designs balance aesthetics with functionality to achieve measurable business results.`
                }
            ]
        };
    }

    // Voice Services
    if (sn.includes('voice') || sn.includes('ivr') || sn.includes('call')) {
        return {
            badge: 'Enterprise Voice Solutions - 99.9% Uptime & Crystal Clear Audio!',
            badgeColor: 'bg-amber-500/20 border-amber-500/40 hover:bg-amber-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} includes IVR systems, automated calling, voice broadcasting, and call center solutions. Our services in ${locationin}, ${cityin}, ${countryin} feature multi-level IVR menus, call recording, real-time analytics, CRM integration, and intelligent call routing with 99.9% uptime.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We deliver crystal-clear audio quality with enterprise-grade reliability. Our platform handles appointment reminders, surveys, emergency alerts, and customer support automation while reducing costs and improving customer satisfaction through smart automation.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our implementation includes IVR design, voice script creation, system integration, testing, deployment, and ongoing optimization. We ensure seamless call flows and professional voice quality for optimal customer experience.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Automate customer interactions, reduce call handling time, improve first-call resolution, gather valuable feedback, and scale operations effortlessly. Our solutions provide detailed analytics and integrate with your existing systems.`
                }
            ]
        };
    }

    // Web Development
    if (sn.includes('web') || sn.includes('website')) {
        return {
            badge: 'High-Performance Websites - Fast, Secure & Mobile-Responsive!',
            badgeColor: 'bg-sky-500/20 border-sky-500/40 hover:bg-sky-500/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} encompasses creating high-performance, visually stunning websites that are fast, secure, and mobile-responsive. Our services in ${locationin}, ${cityin}, ${countryin} include custom coding, CMS solutions, e-commerce platforms, and web applications with focus on UX and conversion optimization.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We build websites that not only look great but also perform flawlessly. Our development team creates SEO-friendly, fast-loading websites with modern design, secure infrastructure, and seamless user experiences that turn visitors into loyal customers.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our development process includes requirement gathering, design mockups, development, testing, deployment, and ongoing maintenance. We use modern frameworks and best practices to ensure scalability, security, and performance.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Establish strong online presence, improve brand image, increase conversions, enhance user experience, and rank higher in search engines. Our websites are built for speed, security, and scalability to support your business growth.`
                }
            ]
        };
    }

    // WhatsApp Business
    if (sn.includes('whatsapp')) {
        return {
            badge: 'WhatsApp Business API - Verified Green Tick & Automation!',
            badgeColor: 'bg-green-600/20 border-green-600/40 hover:bg-green-600/30',
            contentSections: [
                {
                    title: `What is ${name}?`,
                    content: `${name} leverages the world's most popular messaging app for business communication. Our services in ${locationin}, ${cityin}, ${countryin} include WhatsApp Business API integration, chatbot development, broadcast campaigns, and automated customer support with verified business status.`
                },
                {
                    title: `Why Choose Our ${name} Services?`,
                    content: `We provide seamless WhatsApp integration with verified green tick, automated responses, broadcast lists, and rich media messaging. Our solutions enhance customer engagement, provide 24/7 support, and drive sales through personalized conversations.`
                },
                {
                    title: `Our ${name} Process`,
                    content: `Our implementation includes API setup, business verification, chatbot development, template approval, integration with your systems, and campaign management. We ensure compliance with WhatsApp policies and optimal message delivery.`
                },
                {
                    title: `Benefits of ${name}`,
                    content: `Connect with customers on their preferred platform, automate support queries, send order updates, provide personalized recommendations, and drive conversions. Our solutions offer high engagement rates and instant customer communication.`
                }
            ]
        };
    }

    // Default fallback
    return {
        badge: 'Top Google & Bing Rankings in 4 Days!',
        badgeColor: 'bg-primary/20 border-primary/40 hover:bg-primary/30',
        contentSections: [
            {
                title: `What is ${name}?`,
                content: `${name} is a comprehensive digital solution designed to help businesses in ${locationin}, ${cityin}, ${countryin} achieve their online goals. Our expert team delivers results-driven strategies tailored to your specific needs.`
            },
            {
                title: `Why Choose Our ${name} Services?`,
                content: `We specialize in providing top-tier ${name} services to businesses across ${cityin} and ${countryin}. With over 500+ happy clients and presence in 15+ countries, we deliver measurable results within 4 days.`
            },
            {
                title: `Our ${name} Process`,
                content: `Our proven process ensures maximum ROI for your ${name} investment. We analyze your business needs, create a customized strategy, implement cutting-edge solutions, and continuously optimize for better performance.`
            },
            {
                title: `Benefits of ${name}`,
                content: `Increase your online visibility, drive more qualified traffic, boost conversions, and grow your revenue with our ${name} services. We focus on delivering tangible results that impact your bottom line.`
            }
        ]
    };
}

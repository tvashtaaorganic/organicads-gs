import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
    Home,
    ArrowLeft,
    Megaphone,
    Search,
    Code,
    Smartphone,
    Palette,
    Cloud,
    MessageCircle,
    Mail,
    Bot,
    Layers,
    Radio,
    Share2,
    Phone
} from 'lucide-react';

export default function NotFound() {
    const services = [
        { name: 'Digital Marketing', href: '/services/digital-marketing/bangalore', Icon: Megaphone },
        { name: 'SEO Services', href: '/services/seo/bangalore', Icon: Search },
        { name: 'Web Development', href: '/services/website-design/bangalore', Icon: Code },
        { name: 'Mobile App Development', href: '/services/mobile-app/bangalore', Icon: Smartphone },
        { name: 'UI/UX Design', href: '/services/uiux/bangalore', Icon: Palette },
        { name: 'Backend & Cloud', href: '/services/backend-cloud/bangalore', Icon: Cloud },
        { name: 'WhatsApp Business', href: '/services/whatsapp/bangalore', Icon: MessageCircle },
        { name: 'Bulk SMS', href: '/services/bulk-sms/bangalore', Icon: Mail },
        { name: 'Chatbot Development', href: '/services/chatbot/bangalore', Icon: Bot },
        { name: 'Multi-Channel Marketing', href: '/services/multi-channel/bangalore', Icon: Layers },
        { name: 'RCS Messaging', href: '/services/rcs/bangalore', Icon: Radio },
        { name: 'Social Media Ads', href: '/services/social-media-ads/bangalore', Icon: Share2 },
        { name: 'Voice Solutions', href: '/services/voice/bangalore', Icon: Phone },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
                <div className="max-w-6xl w-full text-center">
                    {/* 404 Error */}
                    <div className="mb-8">
                        <h1 className="text-7xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 py-8">
                            404
                        </h1>
                        <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
                            Page Not Found
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>

                    {/* Home Button */}
                    <div className="mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25 text-lg"
                        >
                            <Home className="w-5 h-5" />
                            Go to Homepage
                        </Link>
                    </div>

                    {/* Services List */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center justify-center gap-2">
                            <ArrowLeft className="w-6 h-6" />
                            Explore Our Services
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {services.map((service) => {
                                const IconComponent = service.Icon;
                                return (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
                                    >
                                        <IconComponent className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                                        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {service.name}
                                        </h3>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Need help? <Link href="/#contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contact us</Link> or visit our <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Home page</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

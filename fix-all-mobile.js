const fs = require('fs');
const path = require('path');

const services = [
    'backend-cloud',
    'bulk-sms',
    'chatbot',
    'mobile-app',
    'multi-channel',
    'rcs',
    'social-media-ads',
    'uiux',
    'voice',
    'webdev',
    'whatsapp'
];

const basePath = 'd:\\react\\organicads\\components\\services';

services.forEach(service => {
    const filePath = path.join(basePath, service, 'page.tsx');

    if (fs.existsSync(filePath)) {
        console.log(`Fixing ${service}...`);
        let content = fs.readFileSync(filePath, 'utf8');

        // Fix 1: Section padding
        content = content.replace(
            /className="relative pt-24 pb-8 px-4 overflow-hidden/g,
            'className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 overflow-hidden'
        );

        // Fix 2: Grid gap
        content = content.replace(
            /gap-12 items-center">/g,
            'gap-6 sm:gap-8 lg:gap-12 items-center">'
        );

        // Fix 3: Text container spacing
        content = content.replace(
            /className="text-center lg:text-left">/g,
            'className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6">'
        );

        // Fix 4: Breadcrumb margin
        content = content.replace(
            /lg:justify-start mb-6">\s*<Breadcrumb/g,
            'lg:justify-start mb-3 sm:mb-4">\n                                <Breadcrumb'
        );

        // Fix 5: ServiceBadge margin
        content = content.replace(
            /lg:justify-start mb-6">\s*<ServiceBadge/g,
            'lg:justify-start mb-3 sm:mb-4">\n                                <ServiceBadge'
        );

        // Fix 6: H1 responsive sizes
        content = content.replace(
            /className="text-[34]xl sm:text-[45]xl md:text-[56]xl lg:text-[67]xl font-bold mb-[46] tracking-tight text-gray-900 dark:text-gray-100(?: leading-tight)?">/g,
            'className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight text-gray-900 dark:text-gray-100 leading-tight break-words">'
        );

        // Fix 7: Paragraph sizes
        content = content.replace(
            /className="text-xl md:text-2xl text-gray-600/g,
            'className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600'
        );
        content = content.replace(
            /leading-relaxed mb-8">/g,
            'leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">'
        );

        // Fix 8: Button container
        content = content.replace(
            /className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">/g,
            'className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">'
        );

        // Fix 9: Button styles - Get Custom Quote
        content = content.replace(
            /className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500\/25 text-lg">/g,
            'className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base md:text-lg text-center">'
        );

        // Fix 10: Button styles - View Portfolio
        content = content.replace(
            /className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-[23]00 dark:border-gray-700 rounded-full font-semibold hover:border-gray-300 dark:hover:border-gray-600 transition-all text-lg">/g,
            'className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-gray-300 dark:hover:border-gray-600 transition-all text-sm sm:text-base md:text-lg text-center">'
        );

        // Fix 11: TrustIndicators padding
        content = content.replace(
            /<div className="flex justify-center lg:justify-start">\s*<TrustIndicators/g,
            '<div className="flex justify-center lg:justify-start px-2 sm:px-0">\n                                <TrustIndicators'
        );

        // Fix 12: Gradient span inline-block
        content = content.replace(
            /<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">/g,
            '<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 inline-block">'
        );

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Fixed ${service}`);
    } else {
        console.log(`✗ File not found: ${filePath}`);
    }
});

console.log('\n✅ All service components updated!');

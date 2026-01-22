$services = @(
    "backend-cloud",
    "bulk-sms",
    "chatbot",
    "mobile-app",
    "multi-channel",
    "rcs",
    "seo",
    "social-media-ads",
    "uiux",
    "voice",
    "webdev",
    "whatsapp"
)

foreach ($service in $services) {
    $filePath = "d:\react\organicads\components\services\$service\page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $service..." -ForegroundColor Cyan
        
        $content = Get-Content $filePath -Raw
        
        # Fix 1: Update section padding
        $content = $content -replace 'className="relative pt-24 pb-8 px-4', 'className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 px-4'
        
        # Fix 2: Update grid gap
        $content = $content -replace 'gap-12 items-center">', 'gap-8 lg:gap-12 items-center">'
        
        # Fix 3: Update text container
        $content = $content -replace 'className="text-center lg:text-left">', 'className="text-center lg:text-left space-y-4 sm:space-y-6">'
        
        # Fix 4: Update breadcrumb margin
        $content = $content -replace 'lg:justify-start mb-6">\s*<Breadcrumb', 'lg:justify-start mb-4 sm:mb-6">`n                                <Breadcrumb'
        
        # Fix 5: Update ServiceBadge margin
        $content = $content -replace '(<div className="flex justify-center lg:justify-start mb-)6(">\s*<ServiceBadge)', '$14 sm:mb-6$2'
        
        # Fix 6: Update h1 classes
        $content = $content -replace 'className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-gray-100">', 'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-gray-900 dark:text-gray-100 leading-tight">'
        
        # Fix 7: Update paragraph classes
        $content = $content -replace 'className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-8">', 'className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8">'
        
        # Fix 8: Update button container
        $content = $content -replace 'className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">', 'className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">'
        
        # Fix 9: Update button classes
        $content = $content -replace 'className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25 text-lg">', 'className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25 text-base sm:text-lg">'
        
        $content = $content -replace 'className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-gray-300 dark:hover:border-gray-600 transition-all text-lg">', 'className="px-6 sm:px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:border-gray-300 dark:hover:border-gray-600 transition-all text-base sm:text-lg">'
        
        Set-Content -Path $filePath -Value $content
        Write-Host "✓ Updated $service" -ForegroundColor Green
    } else {
        Write-Host "✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`nAll service components updated!" -ForegroundColor Green

# PowerShell script to fix all service page mobile responsiveness

$services = @(
    "seo", "whatsapp", "webdev", "backend-cloud", "bulk-sms", 
    "chatbot", "mobile-app", "multi-channel", "rcs", 
    "social-media-ads", "uiux", "voice"
)

$oldSection = @'
            <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>

                    <ServiceBadge
                        servicename={service.servicename}
                        name={service.name}
                        locationin={service.locationin}
                        cityin={service.cityin}
                        countryin={service.countryin}
                    />

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-normal md:leading-tight px-2">
'@

$newSection = @'
            <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

                <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
                    <div className="flex justify-center mb-6 w-full overflow-hidden">
                        <div className="max-w-full">
                            <Breadcrumb items={breadcrumbItems} />
                        </div>
                    </div>

                    <div className="flex justify-center mb-6">
                        <ServiceBadge
                            servicename={service.servicename}
                            name={service.name}
                            locationin={service.locationin}
                            cityin={service.cityin}
                            countryin={service.countryin}
                        />
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight px-2 sm:px-4">
'@

foreach ($service in $services) {
    $filePath = "d:\react\organicads\components\services\$service\page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $service..." -ForegroundColor Green
        
        $content = Get-Content $filePath -Raw
        $content = $content -replace [regex]::Escape($oldSection), $newSection
        
        # Also fix the h1 spans
        $content = $content -replace '<span className="gradient-text block mb-2 md:mb-0">', '<span className="gradient-text block mb-3">'
        $content = $content -replace '<span className="text-foreground block md:inline">', '<span className="text-foreground block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">'
        
        # Fix paragraph
        $content = $content -replace '<p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">', '<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">'
        
        Set-Content $filePath -Value $content -NoNewline
        Write-Host "✓ Updated $service" -ForegroundColor Cyan
    } else {
        Write-Host "✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`n✅ All service pages updated!" -ForegroundColor Green

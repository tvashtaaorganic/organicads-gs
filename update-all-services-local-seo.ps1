# PowerShell script to update all service pages with local SEO components
# This script adds the necessary imports and components to all service page files

$serviceFiles = @(
    "d:\react\organicads\components\services\seo\page.tsx",
    "d:\react\organicads\components\services\dm\page.tsx",
    "d:\react\organicads\components\services\whatsapp\page.tsx",
    "d:\react\organicads\components\services\bulk-sms\page.tsx",
    "d:\react\organicads\components\services\chatbot\page.tsx",
    "d:\react\organicads\components\services\mobile-app\page.tsx",
    "d:\react\organicads\components\services\multi-channel\page.tsx",
    "d:\react\organicads\components\services\rcs\page.tsx",
    "d:\react\organicads\components\services\social-media-ads\page.tsx",
    "d:\react\organicads\components\services\uiux\page.tsx",
    "d:\react\organicads\components\services\voice\page.tsx",
    "d:\react\organicads\components\services\backend-cloud\page.tsx"
)

Write-Host "🚀 Starting Local SEO Component Integration..." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $serviceFiles) {
    if (Test-Path $file) {
        Write-Host "📝 Processing: $file" -ForegroundColor Yellow
        
        $content = Get-Content $file -Raw
        
        # Check if already updated
        if ($content -match "LocalIntroSection") {
            Write-Host "   ✅ Already updated - skipping" -ForegroundColor Green
            continue
        }
        
        # 1. Add imports after Testimonials import
        $importPattern = "import Testimonials from '@/components/Testimonials';"
        $newImports = @"
import Testimonials from '@/components/Testimonials';
import LocalIntroSection from '@/components/LocalIntroSection';
import WhyChooseUsLocal from '@/components/WhyChooseUsLocal';
import LocalAreasServed from '@/components/LocalAreasServed';
import LocalTestimonial from '@/components/LocalTestimonial';
import LocalFAQs from '@/components/LocalFAQs';
"@
        $content = $content -replace [regex]::Escape($importPattern), $newImports
        
        # 2. Add new fields to interface (find the interface and add before closing brace)
        $interfacePattern = "        date: string;\s+    };"
        $newFields = @"
        date: string;
        // New fields for programmatic local SEO
        parentslug?: string;
        citytype?: string;
        businesstypes?: string;
        nearbyareas?: string;
        landmarks?: string;
    };
"@
        $content = $content -replace $interfacePattern, $newFields
        
        # 3. Add components in the JSX (after FeaturedIn)
        $featuredInPattern = "            <FeaturedIn />"
        $afterFeaturedIn = @"
            <FeaturedIn />
            
            {/* Local SEO Section 1: Place-Specific Intro */}
            <LocalIntroSection 
                serviceName={service.name}
                cityin={service.cityin}
                citytype={service.citytype}
                businesstypes={service.businesstypes}
                landmarks={service.landmarks}
            />
"@
        $content = $content -replace [regex]::Escape($featuredInPattern), $afterFeaturedIn
        
        # 4. Add WhyChooseUsLocal after ServiceContent
        $serviceContentPattern = "            <ServiceContent pageData={pageData} />"
        $afterServiceContent = @"
            <ServiceContent pageData={pageData} />
            
            {/* Local SEO Section 2: Why Choose Us (City-Specific) */}
            <WhyChooseUsLocal 
                serviceName={service.name}
                cityin={service.cityin}
                citytype={service.citytype}
            />
"@
        $content = $content -replace [regex]::Escape($serviceContentPattern), $afterServiceContent
        
        # 5. Add LocalAreasServed after WorkProcess
        $workProcessPattern = "            <WorkProcess />"
        $afterWorkProcess = @"
            <WorkProcess />
            
            {/* Local SEO Section 3: Areas Served */}
            <LocalAreasServed 
                cityin={service.cityin}
                nearbyareas={service.nearbyareas}
                serviceName={service.name}
            />
"@
        $content = $content -replace [regex]::Escape($workProcessPattern), $afterWorkProcess
        
        # 6. Add LocalTestimonial before Testimonials
        $testimonialsPattern = "            <Testimonials />"
        $beforeTestimonials = @"
            {/* Local SEO Section 4: Local Testimonial */}
            <LocalTestimonial 
                serviceName={service.name}
                cityin={service.cityin}
                citytype={service.citytype}
            />
            
            <Testimonials />
            
            {/* Local SEO Section 5: Local FAQs */}
            <LocalFAQs 
                serviceName={service.name}
                cityin={service.cityin}
                servicetype={service.servicename}
            />
"@
        $content = $content -replace [regex]::Escape($testimonialsPattern), $beforeTestimonials
        
        # Save the updated content
        Set-Content -Path $file -Value $content -NoNewline
        
        Write-Host "   ✅ Successfully updated!" -ForegroundColor Green
    } else {
        Write-Host "   ❌ File not found: $file" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "🎉 All service pages have been updated with local SEO components!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Update Google Sheets with new columns" -ForegroundColor White
Write-Host "2. Fill sample data for 5-10 cities" -ForegroundColor White
Write-Host "3. Test locally with: npm run dev" -ForegroundColor White
Write-Host "4. Deploy gradually to Vercel" -ForegroundColor White

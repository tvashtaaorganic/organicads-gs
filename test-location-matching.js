// Test multi-word location matching
const GOOGLE_SHEET_ID = '1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y';
const SHEET_NAME = 'pages';

async function testLocationMatching() {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);

        const rows = data.table.rows;
        const pages = [];

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.c;

            if (!cells || cells.length === 0 || !cells[0]?.v) {
                continue;
            }

            const page = {
                id: cells[0]?.v || i + 1,
                name: cells[1]?.v || '',
                locationin: cells[2]?.v || '',
                cityin: cells[3]?.v || '',
                slug: cells[10]?.v || '',
                parentslug: cells[13]?.v || '',
            };

            pages.push(page);
        }

        console.log(`✅ Loaded ${pages.length} pages\n`);

        // Test cases
        const testCases = [
            { parentSlug: 'digital-marketing', city: 'bangalore', area: 'agrahara-dasarahalli' },
            { parentSlug: 'digital-marketing', city: 'bangalore', area: 'agara' },
            { parentSlug: 'digital-marketing', city: 'bangalore', area: 'banashankari-1st-stage' },
        ];

        for (const test of testCases) {
            console.log(`\n🔍 Testing: /services/${test.parentSlug}/${test.city}/${test.area}`);

            const normalizedCity = test.city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const normalizedArea = test.area.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            const page = pages.find(p => {
                const parentMatches = p.parentslug === test.parentSlug;
                const sheetCityNormalized = p.cityin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const cityMatches = sheetCityNormalized === normalizedCity;

                if (!parentMatches || !cityMatches) return false;

                // Check area - normalize the locationin field
                const sheetLocationNormalized = p.locationin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const locationMatches = sheetLocationNormalized === normalizedArea;

                const slugHasArea = p.slug.includes(normalizedArea);
                const nameHasArea = p.name.toLowerCase().includes(normalizedArea.replace(/-/g, ' '));

                return locationMatches || slugHasArea || nameHasArea;
            });

            if (page) {
                console.log(`✅ FOUND:`);
                console.log(`   Name: ${page.name}`);
                console.log(`   Location: ${page.locationin}`);
                console.log(`   City: ${page.cityin}`);
                console.log(`   Slug: ${page.slug}`);
            } else {
                console.log(`❌ NOT FOUND`);

                // Show similar pages for debugging
                const similarPages = pages.filter(p => {
                    const parentMatches = p.parentslug === test.parentSlug;
                    const sheetCityNormalized = p.cityin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    const cityMatches = sheetCityNormalized === normalizedCity;
                    return parentMatches && cityMatches;
                });

                if (similarPages.length > 0) {
                    console.log(`   📋 Available locations in ${test.city}:`);
                    similarPages.slice(0, 5).forEach(p => {
                        const normalized = p.locationin?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        console.log(`      - ${p.locationin} (URL: ${normalized})`);
                    });
                }
            }
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

testLocationMatching();

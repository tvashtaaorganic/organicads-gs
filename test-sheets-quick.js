// Quick test to verify Google Sheets data fetching
const GOOGLE_SHEET_ID = '1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y';
const SHEET_NAME = 'pages';

async function testFetch() {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);

        console.log('✅ Total rows:', data.table.rows.length);
        console.log('✅ Total columns:', data.table.rows[0].c.length);

        const row = data.table.rows[0];
        const cells = row.c;

        const page = {
            id: cells[0]?.v || 1,
            name: cells[1]?.v || '',
            locationin: cells[2]?.v || '',
            cityin: cells[3]?.v || '',
            countryin: cells[4]?.v || '',
            slug: cells[10]?.v || '',
            servicename: cells[11]?.v || '',
            date: cells[12]?.v || '',
            // New fields
            parentslug: cells[13]?.v || '',
            citytype: cells[14]?.v || '',
            businesstypes: cells[15]?.v || '',
            nearbyareas: cells[16]?.v || '',
            landmarks: cells[17]?.v || '',
        };

        console.log('\n📄 Page data:');
        console.log(JSON.stringify(page, null, 2));

        console.log('\n✅ Everything looks good!');
        console.log(`\n🔗 Your service page should be at:`);
        console.log(`   http://localhost:3000/services/${page.slug}`);

    } catch (error) {
        console.error('❌ Error:', error);
    }
}

testFetch();

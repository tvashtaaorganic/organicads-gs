// Test the fixed parsing
const GOOGLE_SHEET_ID = '1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y';
const SHEET_NAME = 'pages';

async function testParsing() {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);

        console.log('Total rows returned:', data.table.rows.length);
        console.log('');

        const rows = data.table.rows;
        const pages = [];

        // Start from index 0 (Google Sheets API already excludes headers)
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.c;

            if (!cells || cells.length === 0 || !cells[0]?.v) {
                console.log(`Skipping empty row ${i}`);
                continue;
            }

            const page = {
                id: cells[0]?.v || i + 1,
                name: cells[1]?.v || '',
                locationin: cells[2]?.v || '',
                cityin: cells[3]?.v || '',
                countryin: cells[4]?.v || '',
                descpost: cells[5]?.v || '',
                cat: cells[6]?.v || '',
                titletag: cells[7]?.v || '',
                descriptiontag: cells[8]?.v || '',
                keywordstag: cells[9]?.v || '',
                slug: cells[10]?.v || '',
                servicename: cells[11]?.v || '',
                date: cells[12]?.v || new Date().toISOString(),
            };

            pages.push(page);

            console.log(`Row ${i}:`, {
                id: page.id,
                name: page.name,
                slug: page.slug,
                servicename: page.servicename
            });
        }

        console.log('');
        console.log(`✅ Loaded ${pages.length} pages`);

        if (pages.length > 0) {
            console.log('');
            console.log('First page details:');
            console.log(JSON.stringify(pages[0], null, 2));
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

testParsing();

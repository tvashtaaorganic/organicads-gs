const GOOGLE_SHEET_ID = '1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y';
const SHEET_NAME = 'pages';

async function testSheetStructure() {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);

        console.log('=== COLUMN HEADERS ===');
        const columns = data.table.cols.map((c, i) => ({
            index: i,
            label: c.label || c.id,
            type: c.type
        }));
        console.table(columns);

        console.log('\n=== DATA ROWS ===');
        console.log('Total rows:', data.table.rows.length);

        console.log('\n=== FIRST 5 ROWS ===');
        data.table.rows.slice(0, 5).forEach((row, i) => {
            console.log(`\nRow ${i}:`);
            row.c.forEach((cell, cellIndex) => {
                if (cell?.v) {
                    console.log(`  [${cellIndex}] ${columns[cellIndex].label}: ${cell.v}`);
                }
            });
        });

    } catch (error) {
        console.error('Error:', error.message);
        console.error(error.stack);
    }
}

testSheetStructure();

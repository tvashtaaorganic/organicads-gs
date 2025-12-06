import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function checkSlug() {
  const { default: turso } = await import('./lib/turso');

    const slugToCheck = 'cosmetic-surgery-seo-experts-in-forster-tuncurry-nsw';
    console.log(`Checking for slug: ${slugToCheck}`);

    try {
        const result = await turso.execute({
            sql: 'SELECT * FROM pages WHERE slug = ?',
            args: [slugToCheck]
        });

        if (result.rows.length > 0) {
            console.log('✅ Found!');
            console.log(result.rows[0]);
        } else {
            console.log('❌ Not found!');

            // List some slugs to see what's there
            console.log('\nListing first 5 slugs in DB:');
            const list = await turso.execute('SELECT slug FROM pages LIMIT 5');
            list.rows.forEach(row => console.log(`- ${row.slug}`));
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

checkSlug();

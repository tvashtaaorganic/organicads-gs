import turso from './lib/turso';

async function testDatabase() {
    console.log('Testing Turso database connection...');

    try {
        // Test connection
        const result = await turso.execute('SELECT * FROM pages');

        console.log('\n✅ Database connected successfully!');
        console.log(`\n📊 Total pages in database: ${result.rows.length}`);

        if (result.rows.length === 0) {
            console.log('\n⚠️  NO DATA FOUND! You need to add data to your database.');
            console.log('\nRun this SQL in your Turso database:');
            console.log(`
INSERT INTO pages (name, locationin, cityin, countryin, descpost, cat, titletag, descriptiontag, keywordstag, slug, servicename, date)
VALUES (
  'SEO services for small businesses',
  'Forster-Tuncurry, NSW',
  'Forster-Tuncurry',
  'Australia',
  'international',
  'seo',
  'SEO services for small businesses in Forster-Tuncurry, NSW, Australia',
  'Professional SEO services for small businesses in Forster-Tuncurry, NSW, Australia',
  'SEO, Forster-Tuncurry, NSW, Australia',
  'seo-services-for-small-businesses-in-forster-tuncurry-nsw',
  'seo',
  '2025-01-23'
);
      `);
        } else {
            console.log('\n📄 Pages found:');
            result.rows.forEach((row: any) => {
                console.log(`  - Slug: ${row.slug}`);
                console.log(`    Name: ${row.name}`);
                console.log(`    Service: ${row.servicename}`);
                console.log('');
            });
        }
    } catch (error) {
        console.error('\n❌ Database connection failed!');
        console.error('Error:', error);
        console.log('\n🔧 Check your .env.local file:');
        console.log('  - TURSO_DB_URL should be set');
        console.log('  - TURSO_DB_TOKEN should be set');
    }
}

testDatabase();

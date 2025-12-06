// Test database connection
import turso from './turso';

async function testConnection() {
    try {
        console.log('Testing Turso connection...');
        console.log('URL:', process.env.TURSO_DB_URL);
        console.log('Token exists:', !!process.env.TURSO_DB_TOKEN);

        const result = await turso.execute('SELECT * FROM pages LIMIT 1');
        console.log('Connection successful!');
        console.log('Result:', result.rows);
    } catch (error) {
        console.error('Connection failed:', error);
    }
}

testConnection();

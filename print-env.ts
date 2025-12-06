import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log('URL:', process.env.TURSO_DB_URL);
console.log('TOKEN:', process.env.TURSO_DB_TOKEN);

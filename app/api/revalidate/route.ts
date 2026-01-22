import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { clearCache } from '@/lib/googleSheets';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const secret = searchParams.get('secret');

        // Simple secret check (you should use a proper secret in production)
        if (secret !== process.env.REVALIDATE_SECRET && secret !== 'organicads-revalidate-2026') {
            return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
        }

        // Clear the in-memory cache
        clearCache();
        console.log('!!! IN-MEMORY CACHE CLEARED');

        // Revalidate all service routes
        revalidatePath('/services', 'layout');

        return NextResponse.json({
            revalidated: true,
            message: 'Google Sheets cache cleared successfully',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error revalidating cache:', error);
        return NextResponse.json({
            error: 'Error revalidating cache',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}

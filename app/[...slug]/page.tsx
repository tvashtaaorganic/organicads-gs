import { notFound } from 'next/navigation'
import { getAllRows } from '@/lib/sheets'
import { SeoLandingPage } from '@/components/SeoLandingPage'

export const revalidate = 172800
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const { getPageBySlug } = await import('@/lib/sheets')
  const row = await getPageBySlug(slug.join('/'))
  if (!row) return {}

  const loc = row.locationin.toLowerCase().replace(/\s+/g, '-')
  // Canonical always points to Pattern 1 as requested in the original prompt
  const canonical = `https://organicads.in/${row.parentslug}-company-in-${loc}`

  return {
    title: row.titletag,
    description: row.descriptiontag,
    keywords: row.keywordstag,
    alternates: { canonical },
    openGraph: {
      title: row.titletag,
      description: row.descriptiontag,
      url: canonical,
    },
    robots: { index: true, follow: true },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const { getPageBySlug } = await import('@/lib/sheets')
  const row = await getPageBySlug(slug.join('/'))
  if (!row) return notFound()

  // Return 200 OK for all valid patterns without redirection
  return <SeoLandingPage data={row} />
}

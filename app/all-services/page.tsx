import { getAllPages } from '@/lib/googleSheets';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AllServicesContent from './AllServicesContent';

export const revalidate = 86400;

export default async function AllServicesPage() {
  const allPages = await getAllPages();

  // Extract unique services (parentslug) and cities (cityin)
  const services = Array.from(new Set(allPages.map(p => p.parentslug).filter(Boolean)));
  const cities = Array.from(new Set(allPages.map(p => p.cityin).filter(Boolean)));

  // Group data by service and city for efficient filtering
  const groupedData: Record<string, Record<string, any[]>> = {};

  allPages.forEach(page => {
    const svc = page.parentslug || 'other';
    const city = page.cityin || 'Other';

    if (!groupedData[svc]) groupedData[svc] = {};
    if (!groupedData[svc][city]) groupedData[svc][city] = [];

    groupedData[svc][city].push({
      name: page.name,
      location: page.locationin,
      slug: page.slug,
      parentslug: page.parentslug
    });
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        <AllServicesContent 
          services={services as string[]} 
          cities={cities as string[]} 
          initialData={groupedData} 
        />
      </main>
      <Footer />
    </div>
  );
}

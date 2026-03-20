'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface AllServicesContentProps {
  services: string[];
  cities: string[];
  initialData: Record<string, Record<string, any[]>>;
}

export default function AllServicesContent({ services, cities, initialData }: AllServicesContentProps) {
  const [activeSvc, setActiveSvc] = useState(services[0] || '');
  const [activeCity, setActiveCity] = useState(cities[0] || '');
  const [search, setSearch] = useState('');

  // Normalize service names for display
  const formatSvc = (svc: string) => {
    return svc.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  // Filter locations by selected service, city and search
  const filteredLocations = useMemo(() => {
    const locations = initialData[activeSvc]?.[activeCity] || [];
    if (!search.trim()) return locations;

    const term = search.toLowerCase();
    return locations.filter(loc => 
      loc.location.toLowerCase().includes(term) || 
      loc.name.toLowerCase().includes(term)
    );
  }, [activeSvc, activeCity, search]);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h3 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm">Service Directory</h3>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Our {formatSvc(activeSvc)} Services in <span className="text-indigo-600 dark:text-indigo-400">{activeCity}</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          We bring world-class digital expertise to every corner of {activeCity}. Select a service and find your local area page below.
        </p>
      </div>

      {/* Dual Row Tabs - Services then Cities */}
      <div className="space-y-6">
        {/* Services Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 scroll-smooth px-1">
          {services.map(svc => (
            <button
              key={svc}
              onClick={() => setActiveSvc(svc)}
              className={`px-8 py-3 rounded-full text-sm font-black whitespace-nowrap transition-all duration-300 border-2 ${
                activeSvc === svc 
                ? 'bg-indigo-600 text-white border-indigo-600' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
              }`}
            >
              {formatSvc(svc)}
            </button>
          ))}
        </div>

        {/* Cities Tabs - ALWAYS SHOW so user sees how to switch */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 scroll-smooth">
          <div className="flex-shrink-0 flex items-center pr-3 border-r border-slate-200 dark:border-slate-800 mr-2 h-10">
            <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Select City:</span>
          </div>
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                activeCity === city 
                ? 'bg-indigo-600 text-white border-indigo-600' 
                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Select Area Container */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden min-h-[500px]">
        {/* City & Search Header */}
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-center border-b border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-6">
             <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600">
               <MapPin className="w-7 h-7" />
             </div>
             <div>
               <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">Select Area</h2>
               <p className="text-slate-500 text-sm font-black uppercase tracking-widest mt-1">In {activeCity} — {filteredLocations.length} locations</p>
             </div>
           </div>

           <div className="relative w-full md:w-96 group">
             <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
             <input 
               type="text" 
               placeholder={`Search in ${activeCity}...`}
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full md:w-80 pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
             />
           </div>
        </div>

        {/* Removed redundant city tabs from here as they are now at the top */}

        {/* Locations Grid */}
        <div className="p-8">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
             {filteredLocations.map((loc, i) => {
               const citySlug = activeCity.toLowerCase().replace(/\s+/g, '-');
               const svcSlug = activeSvc.toLowerCase();
               const areaSlug = loc.location.toLowerCase().replace(/\s+/g, '-');
               // Pattern 4: /city/service-services-location
               const pattern4Url = `/${citySlug}/${svcSlug}-services-${areaSlug}`;
               
               return (
                  <a 
                    key={`${loc.location}-${i}`}
                    href={pattern4Url}
                    className="group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-violet-700 truncate mr-2">{loc.location}</span>
                  </a>
               );
             })}

             {filteredLocations.length === 0 && (
               <div className="col-span-full py-20 text-center space-y-4">
                  <div className="inline-flex w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full items-center justify-center text-slate-400">
                    <Search className="w-8 h-8" />
                  </div>
                  <p className="text-slate-500 font-medium">No areas found matching "{search}"</p>
               </div>
             )}
           </div>
        </div>
      </div>

      {/* Global Style for scrollbar hiding */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
        }
      `}</style>
    </div>
  );
}

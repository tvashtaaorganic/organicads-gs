'use client';

import { Badge } from '@/components/ui/badge';
import { Zap } from 'lucide-react';
import { getServiceConfig } from '@/lib/serviceContent';

interface ServiceBadgeProps {
    servicename: string;
    name: string;
    locationin: string;
    cityin: string;
    countryin: string;
}

export default function ServiceBadge({ servicename, name, locationin, cityin, countryin }: ServiceBadgeProps) {
    const serviceConfig = getServiceConfig(servicename || '', name, locationin, cityin, countryin);

    return (
        <Badge className={`mb-6 px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium ${serviceConfig.badgeColor} text-primary-foreground max-w-full break-words text-center`}>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline fill-current shrink-0" />
            <span className="break-words">{serviceConfig.badge}</span>
        </Badge>
    );
}

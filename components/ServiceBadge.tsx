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
        <Badge className={`mb-6 px-6 py-3 text-base font-medium ${serviceConfig.badgeColor} text-primary-foreground`}>
            <Zap className="w-5 h-5 mr-2 inline fill-current" />
            {serviceConfig.badge}
        </Badge>
    );
}

import { type LucideIcon, Package, MapPin, Briefcase, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon?: LucideIcon;
  label: string;
  sublabel?: string;
  isActive?: boolean;
}

function SidebarItem({ icon: Icon, label, sublabel, isActive }: SidebarItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start gap-2 hover:bg-gray-100',
        isActive && 'bg-primary/10 text-primary'
      )}
    >
      {Icon && <Icon className="h-5 w-5 text-gray-600" />}
      <div className="flex flex-col text-left">
        <span className="font-medium text-gray-800">{label}</span>
        {sublabel && <span className="text-sm text-gray-500">{sublabel}</span>}
      </div>
    </Button>
  );
}

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r bg-gray-50">
      {/* Top Section with Vnest Branding */}
      <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-3xl font-extrabold tracking-tight">Vnest</h1>        
      </div>
      <div className="p-6 bg-black text-white">
        <h1 className="text-3xl font-extrabold tracking-tight">EduTrack</h1>        
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Founders Section */}
        <h2 className="text-sm font-semibold text-gray-500">Founders</h2>
        <SidebarItem label="Founder 1" sublabel="CEO" />
        <SidebarItem label="Founder 2" sublabel="Co-founder" />

        {/* Info Section */}
        <h2 className="mt-4 text-sm font-semibold text-gray-500">Info</h2>
        <SidebarItem icon={MapPin} label="Location" sublabel="San Francisco, CA" />
        <SidebarItem icon={Briefcase} label="Stage" sublabel="Series A" />
        <SidebarItem icon={Info} label="Industry" sublabel="EdTech" />
      </div>
    </div>
  );
}

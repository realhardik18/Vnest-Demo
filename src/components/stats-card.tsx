import { type LucideIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  icon: LucideIcon
  title: string
  value: string
  change: string
  className?: string
}

export function StatsCard({ icon: Icon, title, value, change, className }: StatsCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-semibold mt-1">{value}</h3>
            <p className="text-xs text-muted-foreground mt-1">Last day {change}</p>
          </div>
          <Icon className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  )
}


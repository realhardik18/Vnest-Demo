import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Eng (US)
        </Button>    
      </div>
    </header>
  )
}


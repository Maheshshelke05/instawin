import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background">
      <Loader2 className="w-6 h-6 text-accent-yellow-foreground dark:text-accent-yellow animate-spin" />
    </div>
  )
}

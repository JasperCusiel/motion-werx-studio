import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { GripHorizontal } from "lucide-react"

export default function DashboardTile({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="tile-handle cursor-move flex flex-row items-center gap-2">
        <GripHorizontal className="h-4 w-4 text-muted-foreground" />
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        {children}
      </CardContent>
    </Card>
  )
}

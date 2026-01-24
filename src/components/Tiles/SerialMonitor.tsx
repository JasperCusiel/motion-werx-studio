import DashboardTile from "../DashboardTile"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function SerialMonitor() {
  return (
    <DashboardTile title="Serial Monitor">
      <div className="flex flex-col h-full gap-2">
        <Tabs defaultValue="serial">
          <TabsList>
            <TabsTrigger value="serial">Serial Monitor</TabsTrigger>
            <TabsTrigger value="log">Log</TabsTrigger>
          </TabsList>
        </Tabs>

        <ScrollArea className="flex-1 rounded-md border p-3 font-mono text-xs">
          <div>[RX] MOVEJ J5 -30 55 10 40 5</div>
          <div>[TX] OK</div>
          <div>[DBG] IK solve: 0.42 ms</div>
          <div>[DBG] Path segments: 18</div>
        </ScrollArea>
      </div>
    </DashboardTile>
  )
}

import DashboardTile from "../DashboardTile"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const axes = ["X", "Y", "Z", "RX", "RY", "RZ"]

export default function JogControls() {
  return (
    <DashboardTile title="Jog Controls">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button variant="outline" className="w-full">Cartesian</Button>
          <Button variant="outline" className="w-full">Joint</Button>
        </div>

        {axes.map(axis => (
          <div key={axis} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>{axis}</span>
              <span className="font-mono text-muted-foreground">0.0</span>
            </div>
            <Slider defaultValue={[0]} max={100} step={1} />
          </div>
        ))}

        <div className="pt-2 space-y-3">
          <div className="text-xs">Jog Velocity</div>
          <Slider defaultValue={[30]} max={100} />
          <div className="text-xs">Increment</div>
          <Slider defaultValue={[10]} max={50} />
        </div>
      </div>
    </DashboardTile>
  )
}

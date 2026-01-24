import DashboardTile from "../DashboardTile"

export default function RobotView() {
  return (
    <DashboardTile title="Simulation View">
      <div className="h-full w-full rounded-md border bg-muted flex items-center justify-center text-muted-foreground">
        3D Robot View (Canvas / Three.js)
      </div>
    </DashboardTile>
  )
}

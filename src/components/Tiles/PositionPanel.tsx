import DashboardTile from "../DashboardTile"

const values = [
  ["X", "0.000"], ["Y", "0.000"], ["Z", "0.000"],
  ["α", "0.000"], ["β", "0.000"], ["γ", "0.000"],
  ["θ1", "0.000"], ["θ2", "0.000"], ["θ3", "0.000"],
  ["θ4", "0.000"], ["θ5", "0.000"], ["θ6", "0.000"],
]

export default function PositionPanel() {
  return (
    <DashboardTile title="Position Readout">
      <div className="grid grid-cols-3 gap-2 text-sm">
        {values.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-md border px-2 py-1"
          >
            <span className="text-muted-foreground">{label}</span>
            <span className="font-mono">{value}</span>
          </div>
        ))}
      </div>
    </DashboardTile>
  )
}

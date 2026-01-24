import { useState, useEffect } from "react"
import GridLayout from "react-grid-layout"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import { Separator } from "@/components/ui/separator"

import ProgramEditor from "@/components/Tiles/ProgramEditor"
import RobotView from "@/components/Tiles/RobotView"
import PositionPanel from "@/components/Tiles/PositionPanel"
import SerialMonitor from "@/components/Tiles/SerialMonitor"
import JogControls from "@/components/Tiles/JogControls"
import { AppMenuBar } from "@/components/MenuBar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Dashboard() {
  const rowHeight = 30
  const cols = 12
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Layout definition: no maxH / maxW, tiles can expand beyond viewport
  const layout = [
    { i: "jog", x: 0, y: 0, w: 2, h: 8, minW: 2, minH: 5 },
    { i: "robot", x: 6, y: 2, w: 6, h: 5, minW: 4, minH: 5 },
    { i: "position", x: 6, y: 0, w: 6, h: 1.5, minW: 2, minH: 2 },
    { i: "serial", x: 6, y: 6, w: 6, h: 1.5, minW: 4, minH: 1 },
    { i: "program", x: 2, y: 0, w: 4, h: 7.5, minW: 2, minH: 6 },
  ]

  return (
    // Scrollable container
    <div style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
      <div className="flex items-center h-15 p-10 justify-between">
        {/* Left side: Logo + Title + MenuBar */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <img
            src="/src/assets/logo.jpg"          // replace with your logo path
            alt="MotionWerx Logo"
            className="w-10 h-10"    // adjust size
          />

          {/* Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-balance">
            MotionWerx Studio
          </h1>

          {/* Menubar */}
          <AppMenuBar />
        </div>

        {/* Right side: Badge + Switch */}
        <div className="flex items-center space-x-5">
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            Connected
          </Badge>
          <div className="flex items-center space-x-2">
            <Switch id="simulation-switch" />
            <Label>Simulation</Label>
          </div>
        </div>
      </div>


    
      <Separator />
      <GridLayout
        className="layout"
        layout={layout}
        cols={cols}
        rowHeight={rowHeight}
        width={width}
        draggableHandle=".tile-handle"
        compactType={null} // disables auto-compaction
      >
        {/* Each tile */}
        <div key="jog">
          <JogControls />
        </div>
        <div key="program">
          <ProgramEditor />
        </div>
        <div key="robot">
          <RobotView />
        </div>
        <div key="position">
          <PositionPanel />
        </div>
        <div key="serial">
          <SerialMonitor />
        </div>
      </GridLayout>
    </div>
  )
}



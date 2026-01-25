import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  return (
    <div className="w-screen h-screen overflow-auto p-6 flex flex-col gap-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <img
            src="/src/assets/logo.jpg"
            alt="MotionWerx Logo"
            className="w-10 h-10"
          />
          <h1 className="text-3xl font-extrabold tracking-tight text-balance">
            MotionWerx Studio
          </h1>
          <AppMenuBar />
        </div>

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

      {/* Grid Layout */}
      <div className="grid grid-cols-12 grid-rows-12 gap-6">
        {/* Program Editor */}
        <Card className="col-start-3 col-span-4 row-start-1 row-span-5">
          <CardHeader>
            <CardTitle>Program Editor</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <ProgramEditor />
          </CardContent>
        </Card>
        {/* Jog Controls */}
        <Card className="col-start-1 col-span-2 row-start-1 row-span-3">
          <CardHeader>
            <CardTitle>Jog Controls</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <JogControls />
          </CardContent>
        </Card>


        {/* Robot View */}
        <Card className="col-start-7 col-span-6 row-start-2 row-span-4">
          <CardHeader>
            <CardTitle>Robot View</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <RobotView />
          </CardContent>
        </Card>

        {/* Position Panel */}
        <Card className="col-start-7 col-span-6 row-start-1 row-span-1">
          <CardHeader>
            <CardTitle>Position Panel</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <PositionPanel />
          </CardContent>
        </Card>

        {/* Serial Monitor */}
        <Card className="col-start-1 col-span-2 row-start-4 row-span-2">
          <CardHeader>
            <CardTitle>Serial Monitor</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <SerialMonitor />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

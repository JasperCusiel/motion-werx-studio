import DashboardTile from "../DashboardTile"
import { Button } from "@/components/ui/button"
import { Play, Pause, Square } from "lucide-react"
import { useState } from "react"
import Editor from "@monaco-editor/react"

interface FileTab {
  id: string
  name: string
  language: string
  content: string
  dirty?: boolean // true if unsaved
}

export default function ProgramEditor() {
  const [files, setFiles] = useState<FileTab[]>([
    {
      id: "file-1",
      name: "Untitled 1",
      language: "plaintext",
      content: "",
      dirty: false,
    },
  ])

  const [activeTab, setActiveTab] = useState<string>("file-1")

  // Handle editor content change
  const handleEditorChange = (value: string | undefined) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === activeTab
          ? { ...file, content: value || "", dirty: true }
          : file
      )
    )
  }

  // Close a tab
  const closeTab = (id: string) => {
    if (files.length === 1) return // always keep at least one file open
    setFiles((prev) => prev.filter((f) => f.id !== id))
    if (activeTab === id) {
      // Switch to the first remaining tab
      setActiveTab(files.find((f) => f.id !== id)!.id)
    }
  }

  // Add a new tab (reuses numbers of closed tabs)
  const addTab = () => {
    // Find existing untitled numbers
    const usedNumbers = files
      .map((f) => {
        const match = f.name.match(/^Untitled (\d+)$/)
        return match ? parseInt(match[1], 10) : null
      })
      .filter(Boolean) as number[]

    // Find the smallest unused number
    let newNumber = 1
    while (usedNumbers.includes(newNumber)) {
      newNumber++
    }

    const newId = `file-${Date.now()}` // unique ID

    setFiles((prev) => [
      ...prev,
      {
        id: newId,
        name: `Untitled ${newNumber}`,
        language: "plaintext",
        content: "",
        dirty: false,
      },
    ])
    setActiveTab(newId)
  }

  // Save the current tab
  const saveTab = (id: string) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === id ? { ...file, dirty: false } : file
      )
    )
  }

  // Example "Run" function
  const runProgram = () => {
    const current = files.find((f) => f.id === activeTab)
    console.log("Running program:", current?.content)
    alert("Running program in console (check console log)!")
    saveTab(activeTab) // mark as saved
  }

  return (
    <DashboardTile title="Program Editor">
      <div className="flex flex-col h-full gap-3">
        {/* Top Tab Bar */}
        <div className="flex items-center border-b border-gray-200 dark:border-gray-700">
          <div className="flex-1 flex overflow-x-auto">
            {files.map((file) => (
              <div
                key={file.id}
                className={`flex items-center px-4 py-2 cursor-pointer select-none border-b-2 ${
                  activeTab === file.id
                    ? "border-blue-500 font-semibold"
                    : "border-transparent hover:border-gray-400"
                }`}
                onClick={() => setActiveTab(file.id)}
              >
                {/* Saved / unsaved indicator */}
                {file.dirty ? (
                  <span className="mr-1 text-red-500 font-bold">●</span>
                ) : (
                  <span className="mr-1 text-green-500 font-bold">●</span>
                )}

                <span className="mr-2">{file.name}</span>

                {files.length > 1 && (
                  <button
                    className="text-gray-400 hover:text-red-500 text-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeTab(file.id)
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}

            {/* Add New Tab Button */}
            <button
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 font-bold"
              onClick={addTab}
            >
              +
            </button>
          </div>
        </div>

        {/* Monaco Editor */}
        <div className="flex-1 rounded-md border overflow-hidden">
          <Editor
            height="100%"
            language={files.find((f) => f.id === activeTab)?.language || "plaintext"}
            value={files.find((f) => f.id === activeTab)?.content || ""}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              lineNumbers: "on",
              wordWrap: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 pt-2">
          <Button size="icon" variant="outline" onClick={runProgram}>
            <Play className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Pause className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Square className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DashboardTile>
  )
}

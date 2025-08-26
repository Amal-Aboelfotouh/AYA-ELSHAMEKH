"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Square, Plus, Minus, Bluetooth, Battery, ArrowLeft, Settings, Activity } from "lucide-react"
import { NerviaLogo } from "@/components/ui/nervia-logo"
import Link from "next/link"

export default function TherapyPage() {
  const [isConnected, setIsConnected] = useState(true)
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [sessionTime, setSessionTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(20 * 60) // 20 minutes in seconds
  const [intensity, setIntensity] = useState([5])
  const [selectedProgram, setSelectedProgram] = useState("chronic-pain")

  const programs = [
    {
      id: "chronic-pain",
      name: "Chronic Pain Relief",
      description: "Gentle, continuous therapy for ongoing pain management",
      duration: "20 min",
      intensity: "Low-Medium",
      icon: "🎯",
    },
    {
      id: "acute-pain",
      name: "Acute Pain Treatment",
      description: "Targeted therapy for sudden or severe pain episodes",
      duration: "15 min",
      intensity: "Medium-High",
      icon: "⚡",
    },
    {
      id: "muscle-recovery",
      name: "Muscle Recovery",
      description: "Post-workout recovery and muscle relaxation",
      duration: "25 min",
      intensity: "Medium",
      icon: "💪",
    },
    {
      id: "arthritis",
      name: "Arthritis Support",
      description: "Specialized therapy for joint pain and stiffness",
      duration: "30 min",
      intensity: "Low",
      icon: "🦴",
    },
  ]

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isSessionActive && !isPaused) {
      interval = setInterval(() => {
        setSessionTime((prev) => {
          if (prev >= totalDuration) {
            setIsSessionActive(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isSessionActive, isPaused, totalDuration])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStartSession = () => {
    setIsSessionActive(true)
    setIsPaused(false)
    setSessionTime(0)
  }

  const handlePauseSession = () => {
    setIsPaused(!isPaused)
  }

  const handleStopSession = () => {
    setIsSessionActive(false)
    setIsPaused(false)
    setSessionTime(0)
  }

  const adjustIntensity = (change: number) => {
    const newValue = Math.max(1, Math.min(10, intensity[0] + change))
    setIntensity([newValue])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard-main">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <NerviaLogo className="h-16 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Bluetooth className={`w-4 h-4 ${isConnected ? "text-accent" : "text-muted-foreground"}`} />
              <span className={isConnected ? "text-accent" : "text-muted-foreground"}>
                {isConnected ? "Connected" : "Disconnected"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Battery className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{batteryLevel}%</span>
            </div>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Device Status */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Device Status</CardTitle>
                <CardDescription>Nervia TENS Unit - Model NV-2024</CardDescription>
              </div>
              <Badge variant={isConnected ? "default" : "destructive"} className="bg-accent text-accent-foreground">
                {isConnected ? "Connected" : "Disconnected"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{batteryLevel}%</div>
                <div className="text-sm text-muted-foreground">Battery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{intensity[0]}/10</div>
                <div className="text-sm text-muted-foreground">Intensity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{formatTime(sessionTime)}</div>
                <div className="text-sm text-muted-foreground">Session Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{Math.floor(totalDuration / 60)}min</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Selection */}
        {!isSessionActive && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Therapy Program</CardTitle>
              <CardDescription>Choose the program that best matches your current needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {programs.map((program) => (
                  <Card
                    key={program.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedProgram === program.id ? "ring-2 ring-primary bg-primary/5" : ""
                    }`}
                    onClick={() => setSelectedProgram(program.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{program.icon}</span>
                        <div>
                          <CardTitle className="text-base">{program.name}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {program.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {program.intensity}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Session Control */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Session Control</CardTitle>
            <CardDescription>
              {isSessionActive
                ? `${programs.find((p) => p.id === selectedProgram)?.name} - ${isPaused ? "Paused" : "Active"}`
                : "Ready to start therapy session"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>
                  {formatTime(sessionTime)} / {formatTime(totalDuration)}
                </span>
              </div>
              <Progress value={(sessionTime / totalDuration) * 100} className="h-2" />
            </div>

            {/* Intensity Control */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Intensity Level</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => adjustIntensity(-1)} disabled={intensity[0] <= 1}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-lg font-bold min-w-[3rem] text-center text-primary">{intensity[0]}/10</span>
                  <Button variant="outline" size="sm" onClick={() => adjustIntensity(1)} disabled={intensity[0] >= 10}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Slider value={intensity} onValueChange={setIntensity} max={10} min={1} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Gentle</span>
                <span>Moderate</span>
                <span>Strong</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              {!isSessionActive ? (
                <Button size="lg" onClick={handleStartSession} disabled={!isConnected} className="px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Start Session
                </Button>
              ) : (
                <div className="flex gap-3">
                  <Button variant="outline" size="lg" onClick={handlePauseSession} className="px-6 bg-transparent">
                    {isPaused ? (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Resume
                      </>
                    ) : (
                      <>
                        <Pause className="w-5 h-5 mr-2" />
                        Pause
                      </>
                    )}
                  </Button>
                  <Button variant="destructive" size="lg" onClick={handleStopSession} className="px-6">
                    <Square className="w-5 h-5 mr-2" />
                    Stop
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Real-time Feedback */}
        {isSessionActive && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-accent" />
                Real-time Feedback
              </CardTitle>
              <CardDescription>Monitor your therapy session in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">{Math.floor(Math.random() * 20) + 80}</div>
                  <div className="text-sm text-muted-foreground">Pulse Rate</div>
                  <div className="text-xs text-muted-foreground">BPM</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">{Math.floor(Math.random() * 3) + 7}</div>
                  <div className="text-sm text-muted-foreground">Pain Level</div>
                  <div className="text-xs text-muted-foreground">Self-reported (1-10)</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">{Math.floor(Math.random() * 10) + 85}%</div>
                  <div className="text-sm text-muted-foreground">Effectiveness</div>
                  <div className="text-xs text-muted-foreground">Based on response</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

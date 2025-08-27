"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TrendingDown, TrendingUp, Target, Share, Download, ArrowLeft, Mail, Copy, Check } from "lucide-react"
import { NerviaLogo } from "@/components/ui/nervia-logo"
import Link from "next/link"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("7d")
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const [shareMessage, setShareMessage] = useState("")
  const [selectedContact, setSelectedContact] = useState("")
  const [copied, setCopied] = useState(false)

  // Mock data for charts
  const painLevelData = [
    { date: "Mon", level: 7, sessions: 2 },
    { date: "Tue", level: 6, sessions: 3 },
    { date: "Wed", level: 5, sessions: 2 },
    { date: "Thu", level: 4, sessions: 3 },
    { date: "Fri", level: 3, sessions: 2 },
    { date: "Sat", level: 4, sessions: 1 },
    { date: "Sun", level: 3, sessions: 2 },
  ]

  const sessionData = [
    { date: "Mon", duration: 20, intensity: 5, effectiveness: 75 },
    { date: "Tue", duration: 25, intensity: 6, effectiveness: 80 },
    { date: "Wed", duration: 20, intensity: 5, effectiveness: 85 },
    { date: "Thu", duration: 30, intensity: 7, effectiveness: 90 },
    { date: "Fri", duration: 20, intensity: 5, effectiveness: 85 },
    { date: "Sat", duration: 15, intensity: 4, effectiveness: 70 },
    { date: "Sun", duration: 25, intensity: 6, effectiveness: 88 },
  ]

  const programUsage = [
    { name: "Chronic Pain", value: 45, color: "var(--color-chart-1)" },
    { name: "Muscle Recovery", value: 25, color: "var(--color-chart-2)" },
    { name: "Acute Pain", value: 20, color: "var(--color-chart-3)" },
    { name: "Arthritis", value: 10, color: "var(--color-chart-4)" },
  ]

  const weeklyStats = {
    totalSessions: 15,
    totalDuration: 315, // minutes
    avgPainReduction: 4.2,
    avgEffectiveness: 82,
    streakDays: 7,
  }

  // Share functionality
  const contacts = [
    { id: "remon", name: "Remon Elbana", email: "remon.elbana@example.com" },
    { id: "doctor", name: "Dr. Sarah Williams", email: "dr.williams@healthcenter.com" },
    { id: "therapist", name: "Physical Therapist", email: "therapist@clinic.com" },
  ]

  const handleShare = () => {
    if (selectedContact && shareMessage) {
      // Here you would typically send the data to your backend
      console.log(`Sharing progress with ${selectedContact}: ${shareMessage}`)
      alert(`Progress shared with ${contacts.find(c => c.id === selectedContact)?.name}!`)
      setIsShareDialogOpen(false)
      setShareMessage("")
      setSelectedContact("")
    }
  }

  const copyShareLink = () => {
    const shareLink = `${window.location.origin}/shared-progress/${Math.random().toString(36).substr(2, 9)}`
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 3 months</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share Progress Report</DialogTitle>
                  <DialogDescription>
                    Share your therapy progress with healthcare providers or contacts
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Share with:</label>
                    <Select value={selectedContact} onValueChange={setSelectedContact}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a contact" />
                      </SelectTrigger>
                      <SelectContent>
                        {contacts.map((contact) => (
                          <SelectItem key={contact.id} value={contact.id}>
                            {contact.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message (optional):</label>
                    <Textarea
                      placeholder="Add a personal message..."
                      value={shareMessage}
                      onChange={(e) => setShareMessage(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button onClick={copyShareLink} variant="outline" className="flex-1">
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                    <Button onClick={handleShare} disabled={!selectedContact} className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Total Sessions</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">{weeklyStats.totalSessions}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="w-3 h-3" />
                <span>+12% vs last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Total Duration</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">
                {Math.floor(weeklyStats.totalDuration / 60)}h {weeklyStats.totalDuration % 60}m
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="w-3 h-3" />
                <span>+8% vs last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Pain Reduction</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">{weeklyStats.avgPainReduction}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <TrendingDown className="w-3 h-3" />
                <span>-15% pain level</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Effectiveness</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">{weeklyStats.avgEffectiveness}%</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="w-3 h-3" />
                <span>+5% vs last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Streak Days</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">{weeklyStats.streakDays}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs">
                <Target className="w-3 h-3 text-accent" />
                <span className="text-xs text-muted-foreground">Keep it up!</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pain">Pain Tracking</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Pain Level Trend */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pain Level Trend</CardTitle>
                  <CardDescription>Your pain levels over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={painLevelData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" domain={[0, 10]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--color-card)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="level"
                        stroke="var(--color-chart-1)"
                        fill="var(--color-chart-1)"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Session Effectiveness */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Session Effectiveness</CardTitle>
                  <CardDescription>How effective your therapy sessions have been</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={sessionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" domain={[0, 100]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--color-card)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="effectiveness"
                        stroke="var(--color-chart-2)"
                        strokeWidth={3}
                        dot={{ fill: "var(--color-chart-2)", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Program Usage */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Program Usage</CardTitle>
                  <CardDescription>Distribution of therapy programs used</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={programUsage}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {programUsage.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2 mt-4">
                    {programUsage.map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Sessions */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Sessions</CardTitle>
                  <CardDescription>Your latest therapy sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        date: "Today, 2:30 PM",
                        program: "Chronic Pain Relief",
                        duration: "25 min",
                        intensity: 6,
                        effectiveness: 88,
                      },
                      {
                        date: "Yesterday, 9:15 AM",
                        program: "Muscle Recovery",
                        duration: "20 min",
                        intensity: 5,
                        effectiveness: 85,
                      },
                      {
                        date: "2 days ago, 7:45 PM",
                        program: "Chronic Pain Relief",
                        duration: "30 min",
                        intensity: 7,
                        effectiveness: 90,
                      },
                      {
                        date: "3 days ago, 1:20 PM",
                        program: "Acute Pain",
                        duration: "15 min",
                        intensity: 8,
                        effectiveness: 75,
                      },
                    ].map((session, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border border-border"
                      >
                        <div className="space-y-1">
                          <div className="font-medium text-sm">{session.program}</div>
                          <div className="text-xs text-muted-foreground">{session.date}</div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="text-center">
                            <div className="font-medium">{session.duration}</div>
                            <div className="text-xs text-muted-foreground">Duration</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{session.intensity}/10</div>
                            <div className="text-xs text-muted-foreground">Intensity</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-accent">{session.effectiveness}%</div>
                            <div className="text-xs text-muted-foreground">Effective</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pain" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Daily Pain Levels</CardTitle>
                  <CardDescription>Track your pain intensity over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={painLevelData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" domain={[0, 10]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--color-card)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="level" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pain Correlation</CardTitle>
                  <CardDescription>Pain levels vs therapy sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={painLevelData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--color-card)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="level"
                        stroke="var(--color-chart-1)"
                        strokeWidth={2}
                        name="Pain Level"
                      />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="var(--color-chart-2)"
                        strokeWidth={2}
                        name="Sessions"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Duration & Intensity</CardTitle>
                <CardDescription>Analyze your therapy session patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={sessionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                    <YAxis stroke="var(--color-muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="duration" fill="var(--color-chart-1)" name="Duration (min)" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="intensity" fill="var(--color-chart-2)" name="Intensity" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Insights</CardTitle>
                  <CardDescription>Personalized recommendations based on your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <div className="font-medium text-sm">Optimal Session Time</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Your most effective sessions occur between 2-4 PM. Consider scheduling therapy during this
                          time.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <div className="font-medium text-sm">Intensity Recommendation</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Gradually increasing intensity to level 7-8 may improve effectiveness by 15%.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-chart-2/10 border border-chart-2/20">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-chart-2 mt-2" />
                      <div>
                        <div className="font-medium text-sm">Program Suggestion</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Try alternating between Chronic Pain and Muscle Recovery programs for better results.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Goals & Achievements</CardTitle>
                  <CardDescription>Track your therapy milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekly Session Goal</span>
                      <Badge variant="default" className="bg-accent text-accent-foreground">
                        Completed
                      </Badge>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: "100%" }} />
                    </div>
                    <div className="text-xs text-muted-foreground">15/15 sessions this week</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pain Reduction Target</span>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }} />
                    </div>
                    <div className="text-xs text-muted-foreground">70% towards 5-point reduction goal</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Consistency Streak</span>
                      <Badge variant="default" className="bg-chart-2 text-white">
                        7 Days
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">Keep up the great work!</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

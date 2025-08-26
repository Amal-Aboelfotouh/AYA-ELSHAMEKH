"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Activity,
  TrendingDown,
  TrendingUp,
  FileText,
  Search,
  Filter,
  Download,
  Eye,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowLeft,
} from "lucide-react"
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
} from "recharts"
import { NerviaLogo } from "@/components/ui/nervia-logo"
import Link from "next/link"

export default function DoctorPortalPage() {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Mock data for patients
  const patients = [
    {
      id: "1",
      name: "Sarah Johnson",
      age: 65,
      condition: "Chronic Lower Back Pain",
      lastSession: "2024-01-15",
      totalSessions: 45,
      avgPainReduction: 3.2,
      status: "active",
      riskLevel: "low",
      nextAppointment: "2024-01-20",
    },
    {
      id: "2",
      name: "Michael Chen",
      age: 42,
      condition: "Post-Surgery Recovery",
      lastSession: "2024-01-14",
      totalSessions: 28,
      avgPainReduction: 4.1,
      status: "active",
      riskLevel: "medium",
      nextAppointment: "2024-01-18",
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      age: 38,
      condition: "Fibromyalgia",
      lastSession: "2024-01-12",
      totalSessions: 62,
      avgPainReduction: 2.8,
      status: "needs-attention",
      riskLevel: "high",
      nextAppointment: "2024-01-16",
    },
    {
      id: "4",
      name: "David Thompson",
      age: 55,
      condition: "Arthritis",
      lastSession: "2024-01-13",
      totalSessions: 33,
      avgPainReduction: 3.5,
      status: "active",
      riskLevel: "low",
      nextAppointment: "2024-01-22",
    },
  ]

  // Mock data for patient details
  const patientDetailData = {
    painTrend: [
      { date: "Week 1", pain: 8, sessions: 3 },
      { date: "Week 2", pain: 7, sessions: 4 },
      { date: "Week 3", pain: 6, sessions: 3 },
      { date: "Week 4", pain: 5, sessions: 4 },
      { date: "Week 5", pain: 4, sessions: 3 },
      { date: "Week 6", pain: 4, sessions: 3 },
    ],
    sessionData: [
      { date: "Mon", duration: 25, intensity: 6, effectiveness: 85 },
      { date: "Tue", duration: 20, intensity: 5, effectiveness: 80 },
      { date: "Wed", duration: 30, intensity: 7, effectiveness: 90 },
      { date: "Thu", duration: 25, intensity: 6, effectiveness: 88 },
      { date: "Fri", duration: 20, intensity: 5, effectiveness: 75 },
    ],
  }

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || patient.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-accent text-accent-foreground">Active</Badge>
      case "needs-attention":
        return <Badge variant="destructive">Needs Attention</Badge>
      case "inactive":
        return <Badge variant="outline">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low":
        return <Badge className="bg-accent text-accent-foreground">Low Risk</Badge>
      case "medium":
        return <Badge className="bg-chart-3 text-white">Medium Risk</Badge>
      case "high":
        return <Badge variant="destructive">High Risk</Badge>
      default:
        return <Badge variant="outline">{risk}</Badge>
    }
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
            <Badge variant="outline" className="text-sm">
              Dr. Sarah Williams
            </Badge>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Reports
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Total Patients</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">127</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="w-3 h-3" />
                <span>+8 this month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Active Sessions</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">89</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <Activity className="w-3 h-3" />
                <span>Currently active</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Avg Pain Reduction</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">3.4</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <TrendingDown className="w-3 h-3" />
                <span>Points reduced</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Alerts</CardDescription>
              <CardTitle className="text-2xl font-bold text-destructive">3</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-destructive">
                <AlertTriangle className="w-3 h-3" />
                <span>Need attention</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="patients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patients">Patient Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="patients" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Patient Management</CardTitle>
                <CardDescription>Monitor and manage your patients' therapy progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search patients by name or condition..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Patients</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="needs-attention">Needs Attention</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Patient Table */}
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Condition</TableHead>
                        <TableHead>Last Session</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Risk Level</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPatients.map((patient) => (
                        <TableRow key={patient.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{patient.name}</div>
                              <div className="text-sm text-muted-foreground">Age: {patient.age}</div>
                            </div>
                          </TableCell>
                          <TableCell>{patient.condition}</TableCell>
                          <TableCell>{patient.lastSession}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm font-medium">-{patient.avgPainReduction} pain reduction</div>
                              <div className="text-xs text-muted-foreground">{patient.totalSessions} sessions</div>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(patient.status)}</TableCell>
                          <TableCell>{getRiskBadge(patient.riskLevel)}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" onClick={() => setSelectedPatient(patient.id)}>
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="text-xl">{patient.name} - Therapy Progress</DialogTitle>
                                    <DialogDescription>
                                      Detailed view of patient's therapy data and progress
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    {/* Patient Summary */}
                                    <div className="grid md:grid-cols-3 gap-4">
                                      <Card>
                                        <CardHeader className="pb-2">
                                          <CardDescription className="text-xs">Total Sessions</CardDescription>
                                          <CardTitle className="text-xl">{patient.totalSessions}</CardTitle>
                                        </CardHeader>
                                      </Card>
                                      <Card>
                                        <CardHeader className="pb-2">
                                          <CardDescription className="text-xs">Pain Reduction</CardDescription>
                                          <CardTitle className="text-xl">-{patient.avgPainReduction}</CardTitle>
                                        </CardHeader>
                                      </Card>
                                      <Card>
                                        <CardHeader className="pb-2">
                                          <CardDescription className="text-xs">Next Appointment</CardDescription>
                                          <CardTitle className="text-xl">{patient.nextAppointment}</CardTitle>
                                        </CardHeader>
                                      </Card>
                                    </div>

                                    {/* Pain Trend Chart */}
                                    <Card>
                                      <CardHeader>
                                        <CardTitle className="text-lg">Pain Level Trend</CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                        <ResponsiveContainer width="100%" height={200}>
                                          <LineChart data={patientDetailData.painTrend}>
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
                                            <Line
                                              type="monotone"
                                              dataKey="pain"
                                              stroke="var(--color-chart-1)"
                                              strokeWidth={2}
                                              dot={{ fill: "var(--color-chart-1)", strokeWidth: 2, r: 4 }}
                                            />
                                          </LineChart>
                                        </ResponsiveContainer>
                                      </CardContent>
                                    </Card>

                                    {/* Recent Sessions */}
                                    <Card>
                                      <CardHeader>
                                        <CardTitle className="text-lg">Recent Session Data</CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                        <ResponsiveContainer width="100%" height={200}>
                                          <BarChart data={patientDetailData.sessionData}>
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
                                            <Bar
                                              dataKey="effectiveness"
                                              fill="var(--color-chart-2)"
                                              radius={[2, 2, 0, 0]}
                                            />
                                          </BarChart>
                                        </ResponsiveContainer>
                                      </CardContent>
                                    </Card>

                                    {/* Notes Section */}
                                    <Card>
                                      <CardHeader>
                                        <CardTitle className="text-lg">Clinical Notes</CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                          <Label htmlFor="notes">Add Clinical Note</Label>
                                          <Textarea
                                            id="notes"
                                            placeholder="Enter clinical observations, recommendations, or notes..."
                                            className="min-h-[100px]"
                                          />
                                        </div>
                                        <Button className="w-full">Save Note</Button>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button variant="outline" size="sm">
                                <MessageSquare className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patient Outcomes Overview</CardTitle>
                  <CardDescription>Average pain reduction across all patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={patientDetailData.painTrend}>
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
                      <Area
                        type="monotone"
                        dataKey="pain"
                        stroke="var(--color-chart-1)"
                        fill="var(--color-chart-1)"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Treatment Effectiveness</CardTitle>
                  <CardDescription>Session effectiveness rates by therapy type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={patientDetailData.sessionData}>
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
                      <Bar dataKey="effectiveness" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Generate Reports</CardTitle>
                <CardDescription>Create detailed reports for patient progress and outcomes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Report Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="patient-progress">Patient Progress Report</SelectItem>
                          <SelectItem value="outcome-summary">Outcome Summary</SelectItem>
                          <SelectItem value="compliance-report">Compliance Report</SelectItem>
                          <SelectItem value="effectiveness-analysis">Effectiveness Analysis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Time Period</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="last-week">Last Week</SelectItem>
                          <SelectItem value="last-month">Last Month</SelectItem>
                          <SelectItem value="last-quarter">Last Quarter</SelectItem>
                          <SelectItem value="last-year">Last Year</SelectItem>
                          <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Patient Selection</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select patients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Patients</SelectItem>
                          <SelectItem value="active">Active Patients Only</SelectItem>
                          <SelectItem value="specific">Specific Patients</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Recent Reports</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Monthly Progress Summary", date: "2024-01-15", type: "PDF" },
                        { name: "Patient Compliance Report", date: "2024-01-10", type: "Excel" },
                        { name: "Effectiveness Analysis Q4", date: "2024-01-05", type: "PDF" },
                      ].map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <div className="font-medium text-sm">{report.name}</div>
                            <div className="text-xs text-muted-foreground">{report.date}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {report.type}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Download className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Patient Alerts</CardTitle>
                <CardDescription>Monitor patients who need immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      patient: "Emma Rodriguez",
                      alert: "Pain levels increased significantly",
                      severity: "high",
                      time: "2 hours ago",
                      icon: AlertTriangle,
                    },
                    {
                      patient: "Michael Chen",
                      alert: "Missed last 2 scheduled sessions",
                      severity: "medium",
                      time: "1 day ago",
                      icon: Clock,
                    },
                    {
                      patient: "David Thompson",
                      alert: "Excellent progress - consider reducing frequency",
                      severity: "low",
                      time: "3 days ago",
                      icon: CheckCircle,
                    },
                  ].map((alert, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-lg border ${
                        alert.severity === "high"
                          ? "border-destructive/20 bg-destructive/5"
                          : alert.severity === "medium"
                            ? "border-chart-3/20 bg-chart-3/5"
                            : "border-accent/20 bg-accent/5"
                      }`}
                    >
                      <alert.icon
                        className={`w-5 h-5 mt-0.5 ${
                          alert.severity === "high"
                            ? "text-destructive"
                            : alert.severity === "medium"
                              ? "text-chart-3"
                              : "text-accent"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{alert.patient}</div>
                        <div className="text-sm text-muted-foreground mt-1">{alert.alert}</div>
                        <div className="text-xs text-muted-foreground mt-2">{alert.time}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Patient
                        </Button>
                        <Button variant="outline" size="sm">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

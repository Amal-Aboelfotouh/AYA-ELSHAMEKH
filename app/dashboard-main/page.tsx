"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NerviaLogo } from "@/components/ui/nervia-logo"
import { Settings, Play, Phone, ShoppingCart, Video, MessageCircle } from "lucide-react"
import Link from "next/link"

interface User {
  name: string
  email: string
  profilePicture: string
}

export default function DashboardMainPage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("nerviaUser")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
          <p className="text-violet-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-violet-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <NerviaLogo className="h-16 w-auto" size="xl" />
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Welcome back, {user.name}</p>
                <p className="text-xs text-gray-500">Ready for your session?</p>
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.profilePicture || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="bg-violet-100 text-violet-600">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-violet-600">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Images Section */}
      <div className="bg-white/60 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden max-w-4xl w-full">
              <img
                src="/physiotherapy-banner.png"
                alt="Physiotherapy banner with various therapy icons and exercises"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium">Complete Physiotherapy Solutions</p>
                <p className="text-sm opacity-90">Professional therapy guidance and support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <NerviaLogo className="h-24 w-auto" size="xl" />
                </div>
                <CardTitle className="text-2xl text-violet-900">Your Nervia Device</CardTitle>
                <CardDescription>Start your therapy session or purchase additional devices</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/therapy">
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3">
                    <Play className="mr-2 h-5 w-5" />
                    Start Session
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-violet-300 text-violet-600 hover:bg-violet-50 px-8 py-3 bg-transparent"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            {/* Exercise Videos */}
            <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
              <CardHeader>
                <CardTitle className="text-xl text-violet-900">Exercise Videos</CardTitle>
                <CardDescription>Guided exercises to enhance your therapy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "Neck Relief", duration: "5 min" },
                    { title: "Back Therapy", duration: "8 min" },
                    { title: "Shoulder Care", duration: "6 min" },
                    { title: "Leg Recovery", duration: "10 min" },
                  ].map((exercise, index) => (
                    <Link key={index} href="/exercises" className="group">
                      <div className="bg-violet-100 rounded-lg p-4 text-center hover:bg-violet-200 transition-colors">
                        <Video className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-violet-900">{exercise.title}</p>
                        <p className="text-xs text-violet-600">{exercise.duration}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
              <CardHeader>
                <CardTitle className="text-lg text-violet-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/doctor">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-violet-300 text-violet-600 hover:bg-violet-50 bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Doctor
                  </Button>
                </Link>
                <Link href="/community">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-violet-300 text-violet-600 hover:bg-violet-50 bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Community Support
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-violet-300 text-violet-600 hover:bg-violet-50 bg-transparent"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    View Progress
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Today's Stats */}
            <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
              <CardHeader>
                <CardTitle className="text-lg text-violet-900">Today's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Sessions Completed</span>
                  <span className="font-semibold text-violet-600">2/3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pain Level</span>
                  <span className="font-semibold text-green-600">3/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Streak</span>
                  <span className="font-semibold text-violet-600">7 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

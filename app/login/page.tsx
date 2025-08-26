"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NerviaLogo } from "@/components/ui/nervia-logo"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    disease: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user data in localStorage for demo purposes
    localStorage.setItem(
      "nerviaUser",
      JSON.stringify({
        name: formData.name || "John Doe",
        email: formData.email,
        profilePicture: "/user-profile-illustration.png",
      }),
    )
    router.push("/dashboard-main")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <NerviaLogo className="h-16 w-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-violet-900">
            {isLogin ? "Welcome Back" : "Join Nervia"}
          </CardTitle>
          <CardDescription>
            {isLogin ? "Sign in to your account" : "Create your account to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required={!isLogin}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disease">Type of Condition</Label>
                  <Select value={formData.disease} onValueChange={(value) => handleInputChange("disease", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chronic-pain">Chronic Pain</SelectItem>
                      <SelectItem value="arthritis">Arthritis</SelectItem>
                      <SelectItem value="back-pain">Back Pain</SelectItem>
                      <SelectItem value="muscle-pain">Muscle Pain</SelectItem>
                      <SelectItem value="nerve-pain">Nerve Pain</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-violet-600 hover:text-violet-700 text-sm"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

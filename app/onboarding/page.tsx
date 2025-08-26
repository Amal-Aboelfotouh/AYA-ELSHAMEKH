"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Check, Globe, User, Heart, Zap, Shield } from "lucide-react"
import { NerviaLogo } from "@/components/ui/nervia-logo"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    language: "en",
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    painAreas: [] as string[],
    painLevel: "",
    painDuration: "",
    medicalConditions: [] as string[],
    medications: "",
    previousTreatments: [] as string[],
    goals: [] as string[],
    activityLevel: "",
    emergencyContact: "",
    doctorName: "",
    doctorEmail: "",
    consentTerms: false,
    consentData: false,
    consentMarketing: false,
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const painAreas = [
    "Lower Back",
    "Upper Back",
    "Neck",
    "Shoulders",
    "Knees",
    "Hips",
    "Ankles",
    "Wrists",
    "Elbows",
    "Other",
  ]

  const medicalConditions = [
    "Arthritis",
    "Fibromyalgia",
    "Chronic Pain Syndrome",
    "Muscle Strain",
    "Joint Pain",
    "Nerve Pain",
    "Post-Surgery Recovery",
    "Sports Injury",
    "None",
    "Other",
  ]

  const previousTreatments = [
    "Physical Therapy",
    "Medication",
    "Massage Therapy",
    "Acupuncture",
    "Chiropractic Care",
    "TENS Therapy",
    "Heat/Cold Therapy",
    "Exercise Therapy",
    "None",
    "Other",
  ]

  const therapyGoals = [
    "Reduce Daily Pain",
    "Improve Mobility",
    "Better Sleep",
    "Return to Activities",
    "Reduce Medication",
    "Prevent Future Pain",
    "Manage Chronic Condition",
    "Post-Surgery Recovery",
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleArrayToggle = (array: string[], value: string, field: keyof typeof formData) => {
    const newArray = array.includes(value) ? array.filter((item) => item !== value) : [...array, value]
    setFormData({ ...formData, [field]: newArray })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Welcome to Nervia</CardTitle>
              <CardDescription className="text-lg">
                Let's personalize your pain relief therapy experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-medium">Choose your preferred language</Label>
                <RadioGroup
                  value={formData.language}
                  onValueChange={(value) => setFormData({ ...formData, language: value })}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="en" id="en" />
                    <Label htmlFor="en" className="flex-1 cursor-pointer text-base">
                      English
                    </Label>
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="ar" id="ar" />
                    <Label htmlFor="ar" className="flex-1 cursor-pointer text-base">
                      العربية (Arabic)
                    </Label>
                    <span className="text-2xl">🇸🇦</span>
                  </div>
                </RadioGroup>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-muted-foreground">
                  Your language preference will be applied throughout the app, including therapy instructions and
                  support materials.
                </p>
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Personal Information</CardTitle>
              <CardDescription className="text-lg">Help us create your personalized profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="text-base h-12"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-base">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="text-base h-12"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-base h-12"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-base">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="text-base h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-base">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Pain Assessment</CardTitle>
              <CardDescription className="text-lg">Tell us about your pain to personalize your therapy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-medium">Where do you experience pain? (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {painAreas.map((area) => (
                    <div
                      key={area}
                      className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.painAreas.includes(area)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted/50"
                      }`}
                      onClick={() => handleArrayToggle(formData.painAreas, area, "painAreas")}
                    >
                      <Checkbox checked={formData.painAreas.includes(area)} readOnly />
                      <Label className="cursor-pointer text-sm">{area}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-base">Current Pain Level (1-10)</Label>
                  <Select
                    value={formData.painLevel}
                    onValueChange={(value) => setFormData({ ...formData, painLevel: value })}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select pain level" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                        <SelectItem key={level} value={level.toString()}>
                          {level} - {level <= 3 ? "Mild" : level <= 6 ? "Moderate" : "Severe"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-base">How long have you had this pain?</Label>
                  <Select
                    value={formData.painDuration}
                    onValueChange={(value) => setFormData({ ...formData, painDuration: value })}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-week">Less than a week</SelectItem>
                      <SelectItem value="1-4-weeks">1-4 weeks</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-12-months">6-12 months</SelectItem>
                      <SelectItem value="more-than-year">More than a year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Medical History</CardTitle>
              <CardDescription className="text-lg">
                Help us understand your medical background for safer therapy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Do you have any of these medical conditions? (Select all that apply)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {medicalConditions.map((condition) => (
                    <div
                      key={condition}
                      className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.medicalConditions.includes(condition)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted/50"
                      }`}
                      onClick={() => handleArrayToggle(formData.medicalConditions, condition, "medicalConditions")}
                    >
                      <Checkbox checked={formData.medicalConditions.includes(condition)} readOnly />
                      <Label className="cursor-pointer text-sm">{condition}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications" className="text-base">
                  Current Medications (Optional)
                </Label>
                <Textarea
                  id="medications"
                  value={formData.medications}
                  onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
                  placeholder="List any medications you're currently taking..."
                  className="min-h-[100px] text-base"
                />
              </div>
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Previous treatments you've tried (Select all that apply)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {previousTreatments.map((treatment) => (
                    <div
                      key={treatment}
                      className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.previousTreatments.includes(treatment)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted/50"
                      }`}
                      onClick={() => handleArrayToggle(formData.previousTreatments, treatment, "previousTreatments")}
                    >
                      <Checkbox checked={formData.previousTreatments.includes(treatment)} readOnly />
                      <Label className="cursor-pointer text-sm">{treatment}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 5:
        return (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Therapy Goals</CardTitle>
              <CardDescription className="text-lg">What do you hope to achieve with Nervia therapy?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-medium">Your therapy goals (Select all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {therapyGoals.map((goal) => (
                    <div
                      key={goal}
                      className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.goals.includes(goal)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted/50"
                      }`}
                      onClick={() => handleArrayToggle(formData.goals, goal, "goals")}
                    >
                      <Checkbox checked={formData.goals.includes(goal)} readOnly />
                      <Label className="cursor-pointer text-sm">{goal}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-base">Current Activity Level</Label>
                <RadioGroup
                  value={formData.activityLevel}
                  onValueChange={(value) => setFormData({ ...formData, activityLevel: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <RadioGroupItem value="sedentary" id="sedentary" />
                    <Label htmlFor="sedentary" className="flex-1 cursor-pointer">
                      <div className="font-medium">Sedentary</div>
                      <div className="text-sm text-muted-foreground">Little to no exercise</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light" className="flex-1 cursor-pointer">
                      <div className="font-medium">Light Activity</div>
                      <div className="text-sm text-muted-foreground">Light exercise 1-3 days/week</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate" className="flex-1 cursor-pointer">
                      <div className="font-medium">Moderate Activity</div>
                      <div className="text-sm text-muted-foreground">Moderate exercise 3-5 days/week</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <RadioGroupItem value="active" id="active" />
                    <Label htmlFor="active" className="flex-1 cursor-pointer">
                      <div className="font-medium">Very Active</div>
                      <div className="text-sm text-muted-foreground">Hard exercise 6-7 days/week</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact" className="text-base">
                    Emergency Contact (Optional)
                  </Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    className="text-base h-12"
                    placeholder="Name and phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctorName" className="text-base">
                    Primary Doctor (Optional)
                  </Label>
                  <Input
                    id="doctorName"
                    value={formData.doctorName}
                    onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                    className="text-base h-12"
                    placeholder="Doctor's name"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 6:
        return (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl font-serif">Privacy & Consent</CardTitle>
              <CardDescription className="text-lg">Review and accept our terms to complete setup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 rounded-lg border border-border">
                  <Checkbox
                    id="consentTerms"
                    checked={formData.consentTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, consentTerms: checked as boolean })}
                  />
                  <Label htmlFor="consentTerms" className="flex-1 cursor-pointer text-sm leading-relaxed">
                    <span className="font-medium">Terms of Service & Privacy Policy *</span>
                    <br />I agree to the Terms of Service and Privacy Policy. I understand how my data will be used and
                    stored.
                  </Label>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-lg border border-border">
                  <Checkbox
                    id="consentData"
                    checked={formData.consentData}
                    onCheckedChange={(checked) => setFormData({ ...formData, consentData: checked as boolean })}
                  />
                  <Label htmlFor="consentData" className="flex-1 cursor-pointer text-sm leading-relaxed">
                    <span className="font-medium">Medical Data Sharing *</span>
                    <br />I consent to sharing my therapy data with my healthcare provider for better treatment
                    coordination.
                  </Label>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-lg border border-border">
                  <Checkbox
                    id="consentMarketing"
                    checked={formData.consentMarketing}
                    onCheckedChange={(checked) => setFormData({ ...formData, consentMarketing: checked as boolean })}
                  />
                  <Label htmlFor="consentMarketing" className="flex-1 cursor-pointer text-sm leading-relaxed">
                    <span className="font-medium">Marketing Communications (Optional)</span>
                    <br />
                    I'd like to receive updates about new features, therapy tips, and wellness content.
                  </Label>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h4 className="font-medium text-sm mb-2">Your Data Security</h4>
                <p className="text-sm text-muted-foreground">
                  All your personal and medical information is encrypted and stored securely. You can modify your
                  privacy settings or delete your data at any time from your account settings.
                </p>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.language !== ""
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.dateOfBirth
      case 3:
        return formData.painAreas.length > 0 && formData.painLevel && formData.painDuration
      case 4:
        return formData.medicalConditions.length > 0
      case 5:
        return formData.goals.length > 0 && formData.activityLevel
      case 6:
        return formData.consentTerms && formData.consentData
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NerviaLogo size="md" showText={false} />
            <span className="font-serif font-bold text-xl text-foreground">Nervia Setup</span>
          </div>
          <Badge variant="outline" className="text-sm">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Setup Progress</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-8">{renderStep()}</div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          {currentStep < totalSteps ? (
            <Button onClick={handleNext} disabled={!canProceed()} className="px-6">
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button disabled={!canProceed()} className="px-6">
              Complete Setup
              <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

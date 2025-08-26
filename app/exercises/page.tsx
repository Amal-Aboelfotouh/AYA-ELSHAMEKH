"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NerviaLogo } from "@/components/ui/nervia-logo"
import { ArrowLeft, Play, Clock, Target } from "lucide-react"
import Link from "next/link"

const exercises = [
  {
    id: 1,
    title: "Neck Relief Therapy",
    duration: "5 minutes",
    difficulty: "Beginner",
    description: "Gentle exercises to relieve neck tension and improve mobility",
    videoUrl: "/nervia-device-real.png",
    steps: [
      "Position the TENS device electrodes on your neck area",
      "Start with low intensity and gradually increase",
      "Follow the guided movements shown in the video",
      "Maintain steady breathing throughout the session",
    ],
  },
  {
    id: 2,
    title: "Back Therapy Session",
    duration: "8 minutes",
    difficulty: "Intermediate",
    description: "Comprehensive back pain relief and muscle strengthening",
    videoUrl: "/nervia-device-real.png",
    steps: [
      "Place electrodes on the affected back area",
      "Begin with gentle stretching movements",
      "Combine TENS stimulation with guided exercises",
      "Cool down with relaxation techniques",
    ],
  },
  {
    id: 3,
    title: "Shoulder Care Routine",
    duration: "6 minutes",
    difficulty: "Beginner",
    description: "Targeted shoulder pain relief and mobility improvement",
    videoUrl: "/nervia-device-real.png",
    steps: [
      "Attach electrodes to shoulder and upper arm",
      "Perform gentle shoulder rotations",
      "Follow the guided range of motion exercises",
      "End with gentle stretching",
    ],
  },
  {
    id: 4,
    title: "Leg Recovery Program",
    duration: "10 minutes",
    difficulty: "Advanced",
    description: "Complete leg muscle recovery and pain management",
    videoUrl: "/nervia-device-real.png",
    steps: [
      "Position electrodes on thigh and calf muscles",
      "Start with muscle activation exercises",
      "Progress through strengthening movements",
      "Complete with recovery stretches",
    ],
  },
]

export default function ExercisesPage() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-violet-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard-main">
                <Button variant="ghost" size="sm" className="text-violet-600 hover:text-violet-700">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <NerviaLogo className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-violet-900 mb-2">Exercise Videos</h1>
          <p className="text-violet-600">Guided therapy exercises to enhance your TENS device treatment</p>
        </div>

        {selectedExercise ? (
          // Exercise Detail View
          <div className="space-y-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedExercise(null)}
              className="text-violet-600 hover:text-violet-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Exercises
            </Button>

            <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
              <CardHeader>
                <CardTitle className="text-2xl text-violet-900">
                  {exercises.find((e) => e.id === selectedExercise)?.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {exercises.find((e) => e.id === selectedExercise)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-violet-100 rounded-lg flex items-center justify-center">
                  <img
                    src={exercises.find((e) => e.id === selectedExercise)?.videoUrl || "/nervia-device-real.png"}
                    alt="Exercise video"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white rounded-full p-4">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-violet-900 mb-3">Exercise Steps</h3>
                    <div className="space-y-3">
                      {exercises
                        .find((e) => e.id === selectedExercise)
                        ?.steps.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="bg-violet-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-violet-600" />
                      <span className="text-gray-700">
                        Duration: {exercises.find((e) => e.id === selectedExercise)?.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-violet-600" />
                      <span className="text-gray-700">
                        Level: {exercises.find((e) => e.id === selectedExercise)?.difficulty}
                      </span>
                    </div>
                    <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Start Exercise
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Exercise Grid View
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <Card
                key={exercise.id}
                className="bg-white/80 backdrop-blur-sm border-violet-200 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <CardHeader className="pb-3">
                  <div className="aspect-video bg-violet-100 rounded-lg mb-3 overflow-hidden">
                    <img
                      src={exercise.videoUrl || "/nervia-device-real.png"}
                      alt={exercise.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg text-violet-900">{exercise.title}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-4 w-4" />
                      <span>{exercise.difficulty}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-violet-300 text-violet-600 hover:bg-violet-50 bg-transparent"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Exercise
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

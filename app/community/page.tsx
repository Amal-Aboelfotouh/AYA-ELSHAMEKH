"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, Calendar, MapPin, Clock, Star, ThumbsUp, MessageCircle, BookOpen, TrendingUp } from "lucide-react"
import { NerviaLogo } from "@/components/ui/nervia-logo"
import { Plus } from "lucide-react" // Import Plus component
import Link from "next/link"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock data for community posts
  const communityPosts = [
    {
      id: "1",
      author: {
        name: "Sarah M.",
        avatar: "/elderly-woman-smiling.png",
        badge: "6 Month Streak",
        condition: "Chronic Back Pain",
      },
      content:
        "Just completed my 100th therapy session! The progress has been incredible. My pain levels have dropped from 8/10 to 3/10. Thank you to this amazing community for all the support and encouragement along the way.",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      category: "milestone",
      image: "/therapy-session-milestone-celebration.png",
    },
    {
      id: "2",
      author: {
        name: "Michael C.",
        avatar: "/middle-aged-man-contemplative.png",
        badge: "Recovery Champion",
        condition: "Post-Surgery Recovery",
      },
      content:
        "Tips for staying consistent with therapy sessions: 1) Set a daily reminder, 2) Track your progress, 3) Celebrate small wins. What works for you?",
      timestamp: "5 hours ago",
      likes: 18,
      comments: 12,
      category: "tips",
    },
    {
      id: "3",
      author: {
        name: "Dr. Emma Rodriguez",
        avatar: "/female-doctor.png",
        badge: "Medical Expert",
        condition: "Healthcare Provider",
      },
      content:
        "Research shows that combining TENS therapy with gentle stretching can improve outcomes by up to 30%. Always consult with your healthcare provider before making changes to your routine.",
      timestamp: "1 day ago",
      likes: 45,
      comments: 15,
      category: "education",
    },
    {
      id: "4",
      author: {
        name: "Lisa K.",
        avatar: "/woman-with-arthritis.png",
        badge: "Community Helper",
        condition: "Arthritis",
      },
      content:
        "Hosting a virtual support group this Friday at 3 PM EST for anyone dealing with arthritis pain. We'll share experiences and coping strategies. Comment below if you'd like to join!",
      timestamp: "2 days ago",
      likes: 32,
      comments: 20,
      category: "events",
    },
  ]

  // Mock data for support groups
  const supportGroups = [
    {
      id: "1",
      name: "Chronic Pain Warriors",
      description: "Support group for those managing chronic pain conditions",
      members: 1247,
      category: "Chronic Pain",
      nextMeeting: "Friday, 3:00 PM EST",
      moderator: "Dr. Sarah Williams",
    },
    {
      id: "2",
      name: "Post-Surgery Recovery",
      description: "Community for patients recovering from surgical procedures",
      members: 892,
      category: "Recovery",
      nextMeeting: "Monday, 7:00 PM EST",
      moderator: "Michael Chen, PT",
    },
    {
      id: "3",
      name: "Senior Wellness Circle",
      description: "Focused support for seniors managing pain and mobility",
      members: 634,
      category: "Senior Care",
      nextMeeting: "Wednesday, 2:00 PM EST",
      moderator: "Emma Rodriguez, RN",
    },
    {
      id: "4",
      name: "Athletes & Active Recovery",
      description: "For athletes and active individuals using TENS therapy",
      members: 456,
      category: "Sports Medicine",
      nextMeeting: "Thursday, 6:00 PM EST",
      moderator: "Coach David Thompson",
    },
  ]

  // Mock data for educational resources
  const educationalResources = [
    {
      id: "1",
      title: "Understanding TENS Therapy: A Complete Guide",
      type: "Article",
      readTime: "8 min read",
      author: "Dr. Sarah Williams",
      category: "Education",
      rating: 4.8,
      views: 2340,
    },
    {
      id: "2",
      title: "Managing Chronic Pain: Lifestyle Tips",
      type: "Video",
      readTime: "12 min watch",
      author: "Pain Management Team",
      category: "Lifestyle",
      rating: 4.9,
      views: 1890,
    },
    {
      id: "3",
      title: "Proper Electrode Placement Techniques",
      type: "Interactive Guide",
      readTime: "15 min",
      author: "Clinical Team",
      category: "Technical",
      rating: 4.7,
      views: 3120,
    },
    {
      id: "4",
      title: "Building a Support Network",
      type: "Webinar",
      readTime: "45 min",
      author: "Community Team",
      category: "Support",
      rating: 4.6,
      views: 987,
    },
  ]

  const filteredPosts = communityPosts.filter((post) => {
    const matchesSearch =
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <div className="flex items-center gap-2">
              <NerviaLogo className="h-16 w-auto" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Share with the Community</DialogTitle>
                  <DialogDescription>Share your progress, tips, or ask for support</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="milestone">Milestone</SelectItem>
                        <SelectItem value="tips">Tips & Advice</SelectItem>
                        <SelectItem value="support">Support Request</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                        <SelectItem value="celebration">Celebration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Your Message</Label>
                    <Textarea
                      placeholder="Share your thoughts, progress, or ask for support..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Share Post</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Active Members</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">12,847</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="w-3 h-3" />
                <span>+234 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Support Groups</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">28</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowLeft className="w-3 h-3" />
                <span>Active groups</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Posts This Week</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">156</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <ArrowLeft className="w-3 h-3" />
                <span>+12% vs last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Success Stories</CardDescription>
              <CardTitle className="text-2xl font-bold text-primary">89</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-1 text-xs text-accent">
                <ArrowLeft className="w-3 h-3" />
                <span>This month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="groups">Support Groups</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <ArrowLeft className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="milestone">Milestones</SelectItem>
                      <SelectItem value="tips">Tips & Advice</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Community Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{post.author.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {post.author.badge}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{post.author.condition}</div>
                        <div className="text-xs text-muted-foreground mt-1">{post.timestamp}</div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          post.category === "milestone"
                            ? "bg-accent/10 text-accent border-accent/20"
                            : post.category === "education"
                              ? "bg-primary/10 text-primary border-primary/20"
                              : "bg-muted"
                        }
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed">{post.content}</p>
                    {post.image && (
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post image"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="groups" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {supportGroups.map((group) => (
                <Card key={group.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <CardDescription className="mt-2">{group.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{group.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4 text-primary" />
                        <span>{group.members.toLocaleString()} members</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>Next meeting: {group.nextMeeting}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Moderated by {group.moderator}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1">Join Group</Button>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {educationalResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                        <CardDescription className="mt-2">By {resource.author}</CardDescription>
                      </div>
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{resource.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent" />
                        <span>{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{resource.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {resource.category}
                    </Badge>
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {resource.type === "Video" ? "Watch" : resource.type === "Webinar" ? "Join" : "Read"}
                      </Button>
                      <Button variant="outline">
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="space-y-6">
              {[
                {
                  title: "Virtual Pain Management Workshop",
                  date: "Friday, January 19, 2024",
                  time: "3:00 PM - 4:30 PM EST",
                  location: "Online via Zoom",
                  host: "Dr. Sarah Williams",
                  attendees: 45,
                  description:
                    "Learn advanced techniques for managing chronic pain with TENS therapy. Interactive Q&A session included.",
                },
                {
                  title: "Community Success Stories Sharing",
                  date: "Monday, January 22, 2024",
                  time: "7:00 PM - 8:00 PM EST",
                  location: "Community Platform",
                  host: "Community Team",
                  attendees: 78,
                  description:
                    "Join fellow community members as they share their inspiring recovery journeys and milestones.",
                },
                {
                  title: "Senior Wellness Circle Meeting",
                  date: "Wednesday, January 24, 2024",
                  time: "2:00 PM - 3:00 PM EST",
                  location: "Online via Zoom",
                  host: "Emma Rodriguez, RN",
                  attendees: 32,
                  description:
                    "Monthly support group meeting focused on wellness strategies for seniors managing pain.",
                },
              ].map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
                      </div>
                      <Badge className="bg-accent text-accent-foreground">Upcoming</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowLeft className="w-4 h-4 text-primary" />
                          <span>{event.attendees} registered</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Hosted by {event.host}</div>
                    <div className="flex gap-2 pt-2">
                      <Button>Register</Button>
                      <Button variant="outline">Add to Calendar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

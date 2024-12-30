import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Rocket, Users } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200">
      <header className="bg-purple-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">VNest</h1>
          <p className="mt-2">Innovation and Entrepreneurship Ecosystem at VIT Chennai</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Welcome to V-NEST</h2>
          <p className="text-lg text-purple-800 max-w-3xl mx-auto">
            VIT Chennai Startup and Research Foundation supporting students and faculty in transforming their ideas into viable businesses.
          </p>
          <Link href={"/dashboard"}>
          <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-purple-800">Innovation Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Established in 2019, V-NEST promotes start-ups and nurtures students in building their own businesses.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Rocket className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-purple-800">Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Key sectors include Health Tech, Clean Energy, IOT, IT, Edu Tech, and Robotics, aligning with Tamil Nadu's economic priorities.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-purple-800">Thriving Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Supporting over 30 Start-up Companies and 20+ student-run start-ups at various growth stages.</p>
            </CardContent>
          </Card>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Our Vision & Mission</h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="grid md:grid-cols-2 gap-6 p-6">
              <div>
                <CardTitle className="text-purple-800 mb-2">Vision</CardTitle>
                <CardDescription>
                  To nurture society by encouraging entrepreneurs with integrity, sustainability, and innovation.
                </CardDescription>
              </div>
              <div>
                <CardTitle className="text-purple-800 mb-2">Mission</CardTitle>
                <CardDescription>
                  To ignite entrepreneurial sparks, guide students from ideation to start-up, and connect start-ups with angel investors and venture capitalists.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">What We Offer</h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>Office space</li>
                <li>Access to institutional infrastructure</li>
                <li>Funding and research assistance</li>
                <li>Consultancy and mentorship</li>
                <li>Innovation and Start-up policy for students and faculty members</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Join the VNest Community</h2>
          <p className="text-lg text-purple-800 max-w-3xl mx-auto mb-6">
            Be part of our mission to create 100+ start-ups that will drive the country's economic growth.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" >
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 VNest - VIT Chennai Startup and Research Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


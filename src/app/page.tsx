import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Users, Building2, Globe } from 'lucide-react'

export default function LandingPage() {
  const partners = [
    { name: 'ZVIA Tech', logo: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&auto=format&fit=crop&q=60' },
    { name: 'MedX AI Innovations', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60' },
    { name: 'Stemtec AI & Robotics', logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60' },
    { name: 'CracKube', logo: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop&q=60' },
    { name: 'Quinproc LLP', logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60' },
    { name: 'Mechonyx Automation', logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60' },
    { name: 'Mafkin Robotics', logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60' },
    { name: 'Chakaralaya Analytics', logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60' },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-gradient bg-[length:200%_200%]" />
      
      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-12 md:py-24">
          <div className="absolute top-4 left-4">
            <Image
              src="/placeholder.svg"
              alt="VIT Logo"
              width={60}
              height={60}
              className="rounded-full bg-white p-2"
            />
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  V-NEST: <br />
                  Empowering Visionaries, Building Tomorrow
                </h1>
                
                <p className="text-xl text-white/80">
                  Your Launchpad for Innovation, Growth, and Global Impact
                </p>
                
                <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20">
                  Catalogue
                </Button>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  <Card className="p-4 flex flex-col items-center text-center space-y-2 bg-white/10 backdrop-blur-sm border-white/20">
                    <Star className="h-6 w-6 text-white" />
                    <p className="text-sm text-white">Growth Industry Partnerships</p>
                  </Card>
                  <Card className="p-4 flex flex-col items-center text-center space-y-2 bg-white/10 backdrop-blur-sm border-white/20">
                    <Building2 className="h-6 w-6 text-white" />
                    <p className="text-sm text-white">World-Class Infrastructure</p>
                  </Card>
                  <Card className="p-4 flex flex-col items-center text-center space-y-2 bg-white/10 backdrop-blur-sm border-white/20">
                    <Users className="h-6 w-6 text-white" />
                    <p className="text-sm text-white">Global Collaboration Opportunities</p>
                  </Card>
                  <Card className="p-4 flex flex-col items-center text-center space-y-2 bg-white/10 backdrop-blur-sm border-white/20">
                    <Globe className="h-6 w-6 text-white" />
                    <p className="text-sm text-white">Unmatched Mentorship</p>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <Card className="p-8 space-y-4 bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/placeholder.svg"
                      alt="V-NEST Logo"
                      width={120}
                      height={40}
                      className="bg-blue-600"
                    />
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      Setting Industry Standards
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    VIT CHENNAI STARTUP AND RESEARCH FOUNDATION
                  </h2>
                  <p className="text-white/80">WE NURTURE YOU TO FLY HIGH</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="flex flex-col items-center space-y-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-center text-white">{partner.name}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}


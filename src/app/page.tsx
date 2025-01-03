import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Users, Building2, Globe } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const partners = [
    { name: 'ZVIA Tech', logo: 'https://media.discordapp.net/attachments/950058252899598386/1323167768249499698/Group_1000002798.png?ex=67738783&is=67723603&hm=ceca71a0d6c3cd42a43eab5494cadc2fa20d72faaf61912dc84c6046c1bf14c2&=&format=webp&quality=lossless' },
    { name: 'MedX AI Innovations', logo: 'https://media.discordapp.net/attachments/950058252899598386/1323167768467472384/Group_1000002799.png?ex=67738783&is=67723603&hm=021414a7e3d863bba5aa4609672ca62504cde836e857c8f32343cd8876205df3&=&format=webp&quality=lossless' },
    { name: 'Stemtec AI & Robotics', logo: 'https://media.discordapp.net/attachments/950058252899598386/1323167791196672092/image_7.png?ex=67738788&is=67723608&hm=8896e4857785ee5c1ca1088cc6624db329366f9d66151fd2a200e107d72b7a7b&=&format=webp&quality=lossless' },
    { name: 'CracKube', logo: 'https://media.discordapp.net/attachments/950058252899598386/1323167791401930845/image_8.png?ex=67738788&is=67723608&hm=20539753517b5107585f4aa6392067ab1fc9b147d85c96c3696d759f2b955cf8&=&format=webp&quality=lossless' },
    { name: 'Quinproc LLP', logo: 'https://media.discordapp.net/attachments/950058252899598386/1323167791603253281/image_9.png?ex=67738788&is=67723608&hm=075d25fb4494a5b86c1069cfffc7a77e40e24fa8f7db4f160141703a328a4b1a&=&format=webp&quality=lossless' },
    { name: 'Mechonyx Automation', logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60' },
    { name: 'Mafkin Robotics', logo: 'https://media.discordapp.net/attachments/950058252899598386/1323169654151188590/image_12.png?ex=67738944&is=677237c4&hm=1a7a94a39c70819b4a3cfa164471b34cd1ba82dbb9794d48e6da75cf18ddcb54&=&format=webp&quality=lossless' },
    { name: 'Chakaralaya Analytics', logo: 'https://media.discordapp.net/attachments/950058252899598386/1323167791838396467/image_10.png?ex=67738788&is=67723608&hm=343ae59570f32720e6d196dd1d26057417c3f5cef1330772a8e3963caeabe215&=&format=webp&quality=lossless' },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-400 animate-gradient bg-[length:200%_200%]" />
      
      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-12 md:py-24">
          <div className="absolute top-4 left-4">
            <Image
              src="https://media.discordapp.net/attachments/950058252899598386/1323170217525907490/Hf4HeL3BvOv4W6cAAAAASUVORK5CYII.png?ex=677389cb&is=6772384b&hm=7c9be05070286af7e1c132104d9cfda9cc17bcc5b29e4cbceaf77eab82e42201&=&format=webp&quality=lossless"
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
                <Link href="/dashboard">
                <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20">
                  Dashboard
                </Button>
                </Link>

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
                      src="https://media.discordapp.net/attachments/950058252899598386/1323167768014749740/WhatsApp_Image_2024-12-11_at_19.22.56_b93d8e2d.jpg?ex=67738783&is=67723603&hm=22f37be638341bc8f99f3f2469034f5cdae6d4a0a7b24312a9bd12a393e0a27c&=&format=webp&width=716&height=395"
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


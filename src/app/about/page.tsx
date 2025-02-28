import Image from "next/image"
import Link from "next/link"
import { Leaf, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SkinGlow
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/products" className="hover:text-blue-200">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Our Story</h1>
              <p className="text-xl mb-8">
                Founded in 2022, SkinGlow was born from a passion for natural skincare and a commitment to environmental sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt="Our mission"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="mb-4">
                  At SkinGlow, we believe that skincare should be simple, effective, and kind to both your skin and the planet.
                </p>
                <p className="mb-4">
                  Our mission is to create premium quality skincare products using only natural, ethically sourced ingredients that deliver real results.
                </p>
                <p>
                  We're committed to transparency, sustainability, and creating products that help you achieve your healthiest skin ever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Leaf size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to minimizing our environmental footprint through sustainable sourcing, eco-friendly packaging, and responsible manufacturing practices.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Award size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Each product is carefully formulated, rigorously tested, and made with the finest natural ingredients available.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Users size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Community</h3>
                <p className="text-gray-600">
                  We believe in building a community of conscious consumers and giving back through partnerships with environmental and social initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Emily Chen", role: "Founder & CEO", bio: "With over 15 years in natural skincare formulation, Emily founded SkinGlow to make clean beauty accessible to everyone." },
                { name: "David Rodriguez", role: "Head of Product Development", bio: "David's background in organic chemistry and herbalism helps us create effective, plant-based formulations." },
                { name: "Sarah Johnson", role: "Sustainability Director", bio: "Sarah ensures our operations and supply chain meet the highest standards of environmental responsibility." },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 rounded-full bg-blue-100 mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">&copy; 2025 SkinGlow. All rights reserved.</div>
      </footer>
    </div>
  )
}
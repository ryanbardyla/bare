// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Leaf, Droplet } from 'lucide-react'
import { getFeaturedProducts, Product } from '../lib/data/products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Natural Glow</h1>
            <p className="text-xl mb-8">Experience the power of nature with our organic skincare products.</p>
            <Link
              href="/products"
              className="bg-blue-600 text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300"
            >
              Shop Now <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/hero.jpg"
                alt="Natural skincare products"
                fill
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product: Product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <Link href={`/products/${product.id}`} className="text-blue-600 hover:text-blue-800 font-medium transition">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              href="/products" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
            >
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose SkinGlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p className="text-gray-600">Our products are made with only the finest natural ingredients, free from harmful chemicals and synthetic additives.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Leaf size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">We're committed to sustainable practices and packaging, reducing our environmental footprint with every product.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Droplet size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gentle Formula</h3>
              <p className="text-gray-600">Suitable for all skin types, even the most sensitive, our formulas are dermatologist-tested and hypoallergenic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jessica T.", comment: "The hydrating cleanser has completely transformed my dry skin. My face feels softer than ever!" },
              { name: "Michael R.", comment: "After trying countless products for my sensitive skin, SkinGlow is the only brand that doesn't cause irritation." },
              { name: "Aisha K.", comment: "I love that these products are eco-friendly and effective. My skin has never looked better!" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="mb-6">Stay updated with our latest products and exclusive offers.</p>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:border-blue-300 focus:border-2 text-gray-900 mb-2 sm:mb-0"
        />
        <button
          type="submit"
          className="bg-blue-800 px-6 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300 sm:ml-0 sm:rounded-l-none rounded-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</section>
    </main>
  )
}
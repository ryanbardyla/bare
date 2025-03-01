// app/layout.tsx
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './globals.css'
import { ReactNode } from 'react' // Import ReactNode type

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkinGlow - Natural Organic Skincare Products',
  description: 'Discover your natural beauty with our organic skincare products. SkinGlow offers premium quality, eco-friendly skincare solutions.',
  keywords: 'skincare, organic, natural, eco-friendly, beauty products, skin glow',
}

// Explicitly typing the children prop with ReactNode
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Poppy Chargha House | Traditional Desi Cuisine Since 1979 | Lahore',
  description: 'Lahore\'s beloved desi restaurant serving authentic Chargha, BBQ, Karahi, and Steam Roast since 1979. Two branches in Mughalpura and GT Road. Trusted by thousands. Dine-in, Takeout, and Home Delivery available.',
  keywords: 'Poppy Chargha House, Poppy Chargha & Tikka Shop, Chargha Lahore, BBQ Lahore, Karahi Lahore, Desi Food Lahore, Restaurant Lahore, Mughalpura, GT Road, Steam Roast, Tandoori, Seekh Kabab, Traditional Pakistani Food',
  authors: [{ name: 'Poppy Chargha House' }],
  openGraph: {
    title: 'Poppy Chargha House | Traditional Desi Cuisine Since 1979',
    description: 'Lahore\'s beloved desi restaurant serving authentic Chargha, BBQ, Karahi, and Steam Roast since 1979.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poppy Chargha House | Traditional Desi Cuisine Since 1979',
    description: 'Lahore\'s beloved desi restaurant serving authentic Chargha, BBQ, Karahi, and Steam Roast since 1979.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

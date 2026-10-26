import 'swiper/css/bundle';
import "../../public/css/navbar.css";
import 'remixicon/fonts/remixicon.css'
import './globals.css'

import type { Metadata } from 'next'
import { League_Spartan, Poppins } from 'next/font/google'
import AosAnimation from '@/components/Layout/AosAnimation';
import BackToTop from '@/components/Layout/BackToTop';
import RtlDemoSidebar from '@/components/Layout/RtlDemoSidebar';
import TosterProvider from '@/providers/TosterProvider';
import FooterThree from '@/components/Layout/FooterThree';
import NavbarThree from '@/components/Layout/NavbarThree';
import TopHeaderTwo from '@/components/Layout/TopHeaderTwo';
import NewsletterBoxThree from '@/components/Common/NewsletterBoxThree';
import { LanguageProvider } from '@/providers/LanguageProvider';

// For all heading font
const league_spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

// For all body text font
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'coaching - Tailwind Nextjs Coaching & Online Courses Template',
  description: 'Tailwind Nextjs Coaching & Online Courses Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${league_spartan.variable} ${poppins.variable}`}>
      <body>
        <LanguageProvider>
          <TosterProvider />
          <TopHeaderTwo />

          <NavbarThree />

          {children}
          <NewsletterBoxThree />

          <FooterThree />

          {/* AosAnimation */}
          <AosAnimation />

          {/* BackToTop */}
          <BackToTop />

          {/* RtlDemoSidebar */}
          {/* <RtlDemoSidebar /> */}
        </LanguageProvider>
      </body>
    </html>
  )
}

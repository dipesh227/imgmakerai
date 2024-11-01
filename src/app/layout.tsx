import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BackgroundLines } from "@/components/ui/background-lines";
import Header from "@/components/header";
import Provider from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'StableImg - Free AI Image Generator',
  description: 'Generate amazing images using AI with Stable Image',
  keywords: ['AI', 'image generation', 'stable diffusion', 'art', 'creative'],
  authors: [{ name: 'Dipesh Joshi' }],
  creator: 'Dipesh Joshi',
  publisher: 'Dipesh Joshi',
  openGraph: {
    title: 'StableImg - AI Image Generator',
    description: 'Create stunning images with AI technology',
    url: '/favicon.ico',
    siteName: 'StableImg',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundLines>
            <Provider>
              <Header />
              {children}
            </Provider>
          </BackgroundLines>
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css'
import { Ubuntu } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: 'Latika Portfolio',
  description: 'Created by Latika Gupta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
      <SpeedInsights />
      </body>
    </html>
  )
}

import './globals.css'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from "./providers";
import { LikedProvider } from './context/LikedContext';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <NextAuthProvider>
        <body className={poppins.className}>{children}</body>
      </NextAuthProvider>
    </html>
  )
}

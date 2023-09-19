import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Mega Saldão Login',
  description: 'As melhores ofertas para você aproveitar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>{children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'FieldBid',
  description: 'Field service management application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
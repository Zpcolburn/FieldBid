import './globals.css'
import { AuthProvider } from '../context/AuthContext'

export const metadata = {
  title: 'FieldBid',
  description: 'Field service management application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

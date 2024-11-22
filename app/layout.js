// css
import './globals.css'
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// meta data
export const metadata = {
  title: 'Jonathan Acosta | Full Stack Web Developer'
}

export default function RootLayout({ children }) {
  return (
    <html >
      <body>{children}</body>
    </html>
  )
}


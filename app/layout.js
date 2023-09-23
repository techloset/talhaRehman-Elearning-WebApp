import './globals.css'
import font from './lib/font'

export const metadata = {
  title: 'E-Learning Web Application',
  description: 'Made By Muhammad Talha Rehman Company Name:(Techloset)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden  ${font.inter} ${font.poppins} ${font.roboto} ${font.nunito}`}>{children}</body>
    </html>
  )
}

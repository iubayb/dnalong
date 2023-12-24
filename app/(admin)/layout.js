import '@/styles/global/globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <header>
          <p>header</p>
        </header>{children}
        <footer>
          <p>
            footer
          </p>
        </footer></body>

    </html>
  )
}

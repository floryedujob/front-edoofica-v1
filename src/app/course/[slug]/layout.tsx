

export const metadata = {
  title: 'Edufica',
  description: 'Aprenda e aumente suas chances de ser contratado!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {/* <CourseLayout> */}
          {children}
        {/* </CourseLayout> */}
      </body>
    </html>
  )
}

// import '../styles/styles.css';
import '../styles/styles.css';

import { AppProvider } from '../providers'


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
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}

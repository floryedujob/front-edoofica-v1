import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@styles'

interface IAppProvider {
  children: React.ReactNode
}

export function AppProvider({ children }: IAppProvider) {
  return (
    // <ThemeProvider theme={theme}>
    //   {children}
    //   <GlobalStyle />
    // </ThemeProvider>
    <>
      {children}
    </>
  )
}
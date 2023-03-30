import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/theme/default-theme'
import { GlobalStyle } from '@/theme/global-style/global-style'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

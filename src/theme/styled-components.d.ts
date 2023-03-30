import 'styled-components'
import { defaultTheme } from './default-theme'

type CustomTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme { }
}

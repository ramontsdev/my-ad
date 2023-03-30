export const defaultTheme = {
  colors: {
    primary: {
      dark: '#3B003B',
      main: '#800080',
      light: '#DDA0DD',
    },
    secondary: {
      dark: '#008B8B',
      main: '#00FFFF',
      light: '#B2FFFF',
    },
    tertiary: {
      dark: '#B28D00',
      main: '#FFD700',
      light: '#FFF1A8'
    },
    gray: {
      dark: '#333333',
      main: '#AFAFAF',
      light: '#DDDDDD'
    },
    clean: {
      white: '#fff'
    },
    danger: {
      dark: '#CD3700',
      main: '#FF4500',
      light: '#FF7F50'
    }
  }
}

export const theme2 = {
  colors: {
    primary: {
      dark: '',
      main: '#4B0082',
      light: '',
    },
    secondary: {
      dark: '#CCCC00',
      main: '#FFFF00',
      light: '#FFFF99',
    },
    tertiary: {
      main: '#0047AB',
    },
    clean: defaultTheme.colors.clean,
    danger: defaultTheme.colors.danger
  }
}

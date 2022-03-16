export const theme = {
  palette: {
    white: '#FFFFFF',
    red: '#B61032',
    dark_grey: '#1d1d1d',
    grey: '#cacaca',
    black: '#000000'
  },
  fontFamily: {
    montserrat: 'Montserrat'
  },
  transition: {
    hover: 200
  },
  typography: {
    h1: {
      fontSize: '40px',
      lineHeight: '56px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 'bold'
    },
    t0: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'normal'
    },
    t1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'normal'
    },
    t2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'bold'
    }
  }
}
export type Theme = typeof theme
export type WithTheme = { theme: Theme }

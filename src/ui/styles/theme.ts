export const theme = {
  palette: {
    white: '#ffffff',
    black: '#000000',
    grey: '#242b36',
    dark_grey: '#1d232c',
    light_grey: '#9f9f9f',
    extra_light_grey: '#f1f1f1',
    dark_blue: '#141a24',
    hover_dark_blue: '#1e2838',
    blue: '#4b6289',
    green: '#1ba94c',
    light_green: '#22d560'
  },
  fontFamily: {
    montserrat: 'Montserrat'
  },
  transition: {
    hover: 200,
    spin: 10000,
    spinLong: 30000
  },
  typography: {
    h0: {
      fontSize: '52px',
      lineHeight: '60px',
      fontWeight: 'bold'
    },
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
    h4: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 'normal'
    },
    t0: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'normal'
    },
    t0_bold: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'bold'
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

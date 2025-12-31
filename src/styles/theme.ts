export const theme = {
  colors: {
    primary: '#1a3c34', // Deep dark green
    primaryLight: '#2d5a4e',
    primaryDark: '#0f2620',
    secondary: '#d4c5a9', // Beige
    secondaryLight: '#e8dcc6',
    secondaryDark: '#b8a88a',
    white: '#ffffff',
    black: '#0a0a0a',
    gray: '#6b7280',
    grayLight: '#f3f4f6',
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '5rem',
  },
};

export type Theme = typeof theme;

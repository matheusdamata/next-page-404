import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  minHeight: '100vh',
  padding: '0 4.8125rem',

  '@media (min-width: 425px) and (max-width: 768px)': {
    padding: '0 1.5rem',
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    padding: '0 1.5rem',
  },
})

export const Header = styled('div', {
  width: '100%',
  display: 'flex',

  margin: '2.5rem 0 0',

  h1: {
    fontFamily: 'Inconsolata',
    fontSize: '1.5rem',
    letterSpacing: '-0.08em',
  },

  '@media (min-width: 425px) and (max-width: 768px)': {
    margin: '1.25rem 0 0',
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    margin: '1.25rem 0 0',
  },
})

export const Footer = styled('footer', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0 0 1rem',

  span: {
    fontSize: '0.875rem',
    color: '$gray300',
  },

  a: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '$gray300',
  },
})

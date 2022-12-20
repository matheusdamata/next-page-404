import { styled } from '..'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  width: '100%',

  img: {
    marginRight: '7.4375rem',
  },

  '@media (min-width: 768px) and (max-width: 1024px)': {
    flexDirection: 'column',

    img: {
      margin: '4rem 0 3.75rem',
    },
  },

  '@media (min-width: 425px) and (max-width: 768px)': {
    flexDirection: 'column',

    img: {
      width: '17.9375rem',
      height: 'auto',

      margin: '4rem 0 3.75rem',
    },
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    flexDirection: 'column',

    img: {
      width: '17.9375rem',
      height: 'auto',

      margin: '4rem 0 3.75rem',
    },
  },
})

export const SideRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '36.625rem',

  h1: {
    fontSize: '4rem',
    color: '$gray700',
    letterSpacing: '-0.35px',
  },

  p: {
    width: '23.8125rem',
    fontSize: '1.5rem',
    color: '$gray500',
    letterSpacing: '-0.35px',

    margin: '2.25rem 0 4rem',
  },

  button: {
    width: '13.5rem',
    height: '4.25rem',

    fontSize: '0.875rem',
    color: '$white',

    border: 0,

    background: '$gray700',
  },

  '@media (min-width: 768px) and (max-width: 1024px)': {
    marginBottom: '2rem',
  },

  '@media (min-width: 425px) and (max-width: 768px)': {
    width: 'auto',

    h1: {
      fontSize: '3rem',
    },

    p: {
      width: '20.5rem',
      fontSize: '$md',

      margin: '1.875rem 0 4.125rem',
    },
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    width: 'auto',

    marginLeft: '24px',

    h1: {
      fontSize: '1.5rem',
    },

    p: {
      width: '15rem',
      fontSize: '1rem',

      margin: '1.875rem 0 4.125rem',
    },

    button: {
      width: '10rem',
      height: '3rem',

      fontSize: '0.75rem',
    },
  },
})

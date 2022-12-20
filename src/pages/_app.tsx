import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'
import { Container, Footer, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <h1>404 NOT FOUND</h1>
      </Header>

      <Component {...pageProps} />

      <Footer>
        <span>
          Created by{' '}
          <a
            href="https://matheusdamatag.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            @matheusdamatag
          </a>
        </span>
      </Footer>
    </Container>
  )
}

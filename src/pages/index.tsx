import Head from 'next/head'
import Image from 'next/image'
import { Container, SideRight } from '../styles/pages/home'

import NotFoundImage from '../assets/Scarecrow.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>

      <Container>
        <Image src={NotFoundImage} alt="" width={540} height={448} />

        <SideRight>
          <h1>I have bad news for you</h1>

          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>

          <button>BACK TO HOMEPAGE</button>
        </SideRight>
      </Container>
    </>
  )
}

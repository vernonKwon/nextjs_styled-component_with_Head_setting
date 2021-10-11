import type { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'

const Main = styled.div`
  background: red;
  width: 50%;
  height: 50vh;
`
const Sub = styled.div`
  background: blue;
  width: 100%;
  height: 50vh;
`
const Home: NextPage = () => {
  return (
    <div>
      <Main>
        안녕
      </Main>
      <Sub>
        <Link href="test">
          두번째 페이지 이동
        </Link>
        <br />
        <Link href="test/third">
          세번째 페이지 이동
        </Link>
      </Sub>
    </div>
  )
}

export default Home

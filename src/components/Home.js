import React from 'react'
import styled from 'styled-components'

function Home() {
  return <Container>home</Container>
}

export default Home

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('/asserts/images/background.png') center center / cover
      no-repeat fixed;
    z-index: -1;
  }
`

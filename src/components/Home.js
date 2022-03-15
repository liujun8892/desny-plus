import React from 'react'
import styled from 'styled-components'
import ImgSlide from './ImgSlide'
import Viewers from './Viewers'
import Movie from './Movie'

function Home() {
  return (
    <Container>
      <ImgSlide />
      <Viewers />
      <Movie />
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

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

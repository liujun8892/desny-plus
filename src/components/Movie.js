import React from 'react'
import styled from 'styled-components'

function Movie() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="/asserts/images/recommanded-1.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/asserts/images/recommanded-2.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/asserts/images/recommanded-3.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/asserts/images/recommanded-4.jpeg" alt="" />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movie

const Container = styled.div`
  text-align: left;
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`

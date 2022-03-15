import React from 'react'
import styled from 'styled-components'

function Detial() {
  return (
    <Container>
      <BgWrap>
        <img src="/asserts/images/bg-detail.jpeg" alt="" />
      </BgWrap>
      <ImgTitle>
        <img src="/asserts/images/detail-img-title.png" alt="" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/asserts/images/play-icon-black.svg" alt="" />
          <span>play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/asserts/images/play-icon-white.svg" alt="" />
          <span>trailer</span>
        </TrailerButton>
        <AddButton>
          <span></span>
          <span></span>
        </AddButton>
        <GrounpWatchButton>
          <img src="/asserts/images/group-icon.svg" alt="" />
        </GrounpWatchButton>
      </Controls>
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  )
}

export default Detial

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  text-align: left;
`

const BgWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImgTitle = styled.div`
  width: 35vw;
  height: 30vh;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: cneter;
  margin: 24px 0px;
  min-height: 56px;
`

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: cneter;
  margin-right: 22px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.8px;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  font-size: 15px;
  padding: 0 24px;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`

const AddButton = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
  }

  span:first-child {
    height: 2px;
    width: 16px;
    transform: translate(1px, 0px) rotate(0deg);
  }

  span:nth-child(2) {
    height: 16px;
    width: 2px;
    transform: translateX(-8px) rotate(0deg);
  }
`

const GrounpWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
  img {
    widht: 44px;
    height: 44px;
  }
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  max-width: 874px;
  color: rgb(249, 249, 249);
`

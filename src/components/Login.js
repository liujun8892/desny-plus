import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="/asserts/images/cta-logo-one.svg"></LogoOne>
        <GetAllButton>GET ALL THERE</GetAllButton>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LogoTwo src="/asserts/images/cta-logo-two.png"></LogoTwo>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-position: top;
    background-size: cover;
    opacity: 0.8;
    background-image: url('/asserts/images/login-background.jpeg');
    z-index: -1;
  }
`

const Content = styled.div`
  max-width: 670px;
  transition: opacity 0.2s ease 0s;
  width: 100%;
  display: flex;
  margin-top: -100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const GetAllButton = styled.a`
  font-weight: 900;
  color: rgb(249, 249, 249);
  background-color: rgb(0, 99, 229);
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0px;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #0483ee;
  }
`

const Description = styled.p`
  color: rgb(243, 243, 243);
  font-size: 11px;
  margin: 0px 0px 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const LogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  transition: transform 0.4s ease 0s;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`

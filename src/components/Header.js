import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/asserts/images/logo.svg" />
      <NavMenu>
        <a href="javascript:;">
          <img src="/asserts/images/home-icon.svg"></img>
          <span>home</span>
        </a>
        <a href="javascript:;">
          <img src="/asserts/images/search-icon.svg"></img>
          <span>search</span>
        </a>
        <a href="javascript:;">
          <img src="/asserts/images/watchlist-icon.svg"></img>
          <span>watchlist</span>
        </a>
        <a href="javascript:;">
          <img src="/asserts/images/original-icon.svg"></img>
          <span>originals</span>
        </a>
        <a href="javascript:;">
          <img src="/asserts/images/movie-icon.svg"></img>
          <span>movies</span>
        </a>
        <a href="javascript:;">
          <img src="/asserts/images/series-icon.svg"></img>
          <span>series</span>
        </a>
      </NavMenu>

      <Avatar src="https://lh3.googleusercontent.com/a/AATXAJwa9tNJcUoxN48f4YyI7V17nyp9a7C-mx_klVhH=s96-c" />
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  padding: 0 36px;
  height: 70px;
  background: rgb(9, 11, 19);
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    img {
      height: 20px;
    }
    span {
      color: white;
      margin-left: 8px;
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &: hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby'
import Image from './image'
import { Popup } from 'semantic-ui-react'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Svg from './svg'

const headerStyles = css`
  position: relative;
  color: #fdfdfd;
  font-size: 18px;
  height: calc(68vh - 125px);

  a,
  .popUp {
    align-self: center;
  }
`
const popUpOptions = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 10px;

    span {
      margin-left: 10px;
    }
  }
`
const heroTextContainer = css`
  position: absolute;
  top: 200px;
  left: 10px;
  right: 10px;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 65px;
    font-weight: 500;
  }
  h2 {
    font-size: 36px;
    font-weight: 300;
    margin-top: 20px;
  }
  @media (max-width: 690px) {
    h1 {
      font-size: 3.3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 660px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`
const navStyles = css`
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  padding: 25px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  font-weight: 500;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) -9.48%,
    rgba(0, 0, 0, 0) 100%
  );
  a {
    align-self: center;
  }
`
const noLinkStyles = css`
  text-decoration: none;
  color: inherit;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: var(--orange-color);
  }
  @media (max-width: 975px) {
    display: none;
  }
`

const mobileMenu = css`
  display: none;

  @media (max-width: 975px) {
    display: block;
  }
`
const mobileLogo = css`
  transition: all 0.25s ease-in-out;
  @media (max-width: 975px) {
    transform: scale(0.75, 0.75);
  }
  @media (max-width: 400px) {
    transform: scale(0.65, 0.65);
  }
`

const Header = ({ lightBackground = false }) => {
  const [popOverOpen, setPopOverOpen] = React.useState(false)
  let styleOverride = { backgroundColor: 'initial' }
  if (!lightBackground) {
    styleOverride = {
      backgroundColor: '#545454',
      height: '125px',
    }
  }
  return (
    <header css={headerStyles} style={styleOverride}>
      <nav css={navStyles}>
        <Link to="/about-us" css={noLinkStyles} activeClassName="activeLink">
          <span>About</span>
        </Link>
        <Popup
          trigger={
            <span className="popUp" onMouseEnter={() => setPopOverOpen(true)}>
              Our Services
            </span>
          }
          flowing
          on={['hover', 'click']}
          position="bottom center"
          hoverable
          hideOnScroll
          style={{ borderRadius: '5px' }}
          open={popOverOpen}
        >
          <div css={popUpOptions} onMouseLeave={() => setPopOverOpen(false)}>
            <Link to="/we-manage" css={noLinkStyles}>
              <Svg icon="Barchart" color={'var(--orange-color)'} />
              <span className="orangeColor">We Manage</span>
            </Link>
            <Link to="/you-manage" css={noLinkStyles}>
              <Svg icon="Activity" color={'var(--blue-color)'} />
              <span className="blueColor">You Manage</span>
            </Link>
            <Link to="/we-purchase" css={noLinkStyles}>
              <Svg icon="Dalla" color={'var(--green-color)'} />
              <span className="greenColor">We Purchase</span>
            </Link>
          </div>
        </Popup>
        <Link to="/" css={mobileLogo}>
          <Svg icon="Logo" />
        </Link>
        <Link to="/management/" css={noLinkStyles} activeClassName="activeLink">
          <span>Management</span>
        </Link>
        <Link to="/contact" css={noLinkStyles} activeClassName="activeLink">
          <span>Contact</span>
        </Link>
        <Link to="/contact" css={mobileMenu} activeClassName="activeLink">
          <Svg icon="Hamburger" color="#fff" />
        </Link>
      </nav>
      {lightBackground ? (
        <>
          <Image imgName="skyscrappers" altText="sky scrappers" />
          <div css={heroTextContainer}>
            <h1>The Leading Expert</h1>
            <h2>in Judgment Portfolio Management</h2>
          </div>
        </>
      ) : null}
    </header>
  )
}

export default Header

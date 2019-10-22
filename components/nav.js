import React, { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="container">
      <div className="header-wrapper shadow">
        <img src="/logo.png" />

        {/* <a className="right-menu" href="#"
          onClick={() => setShowMenu(true)}
        >
          MENU
        </a>         */}
      </div>

      {/* {showMenu &&
        <>
          <div className="navigation-drawer shadow">
            <ul>
              <li>
                <a className="menu-item" href="#">
                  BERITA
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  FILM
                </a>
              </li>
            </ul>
          </div>     
          <div className="navigation-drawer-black-screen"
            onClick={() => setShowMenu(false)}
          >
          </div>
        </>
      } */}

      <style jsx>{`
        .header-wrapper {
          width: 100%;
          height: 50px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: bold;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12pt;
          z-index: 1;
          box-sizing: border-box;
          position: fixed;
          top: 0;
        }
        img {
          margin-left: 10px;
          width: 120px;
        }
        .right-menu {
          margin-right: 10px;
          text-decoration: none;
          color: black;
          cursor: pointer;
          font-size: 12pt;
        }
        .navigation-drawer {
          height: 100vh;
          width: 50vw;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 3;
          background-color: white;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 10px;
        }
        li {
          margin-bottom: 10px;
        }
        .menu-item {
          font-weight: bold;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12pt;
          color: black;
          text-decoration: none;
        }
        .navigation-drawer-black-screen {
          height: 100vh;
          width: 50vw;
          position: fixed;
          top: 0;
          left: 0;
          background-color: black;
          opacity: 0.5;
          z-index: 2;
        }
      `}</style>
    </div> 
  )
}

export default Nav

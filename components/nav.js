import React, { useState } from 'react'
import { FaFilm, FaNewspaper, FaSearch } from "react-icons/fa";
import { useRouter } from 'next/router'
import { navigate } from '../libs/utils'

const Nav = () => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)
  const [searchText, setSearchText] = useState('')  

  const onSearch = () => {
    if (searchText.length) {
      navigate(`${router.pathname}?query=${searchText}`)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div className="container">
      <div className="header-wrapper shadow">
        <img src="/logo.png" />

        <a className="right-menu-collapse" href="#"
          onClick={() => setShowMenu(true)}
        >
          MENU
        </a>
        
        <div className="right-menu-container">
          <div onClick={() => navigate('/')} className="menu-item">
            <FaNewspaper /> <span>BERITA</span>
          </div>
          <div onClick={() => navigate('/film')} className="menu-item">
            <FaFilm /> <span>NONTON FILM</span>
          </div>
        </div>

        <div className="search-container">
          <input onKeyDown={onKeyDown} type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} className="search-input" placeholder="Pencarian ..." />
          <button onClick={onSearch}><FaSearch color="white" size={16} /></button>
        </div>
      </div>

      {showMenu &&
        <>
          <div className="navigation-drawer shadow">
            <ul>
              <li>
                <div className="search-container-mobile">
                  <input onKeyDown={onKeyDown} type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} className="search-input-mobile" placeholder="Pencarian ..." />
                  <button onClick={onSearch}><FaSearch color="white" size={16} /></button>
                </div>
              </li>
              <li>
                <div onClick={() => navigate('/')} className="menu-item">
                  <FaNewspaper /> <span>BERITA</span>
                </div>
              </li>
              <li>
                <div onClick={() => navigate('/film')} className="menu-item">
                  <FaFilm /> <span>NONTON FILM</span>
                </div>
              </li>
            </ul>
          </div>     
          <div className="navigation-drawer-black-screen"
            onClick={() => setShowMenu(false)}
          >
          </div>
        </>
      }


      <style jsx>{`
        .header-wrapper {
          width: 100%;
          height: 50px;
          background-color: white;
          display: flex;
          align-items: center;          
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
          margin-right: 10px;
          width: 120px;
        }
        .right-menu-collapse {
          margin-right: 10px;
          text-decoration: none;
          color: black;
          cursor: pointer;
          font-size: 12pt;
        }
        .icon {
          position: absolute;
          top: 10;
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
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          padding: 10px;
          width: 100%;          
        }
        li {
          margin-bottom: 10px;
          align-self: stretch;
          padding-right: 10px;
        }
        .menu-item {
          font-weight: bold;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12pt;
          color: black;
          text-decoration: none;      
          display: flex;    
          cursor: pointer;
        }      
        .menu-item span {
          margin-left: 5px;
        }
        .search-container {
          position: absolute;
          top: 11px;
          right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .search-input {
          border-color: black;
          border-width: 1px;
          height: 25px;          
          padding-left: 10px;
          width: 180px;
          font-size: 10pt;
        }
        .search-container button {
          height: 29px;
          width: 40px;
          margin-left: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
        }
        .search-container-mobile {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .search-input-mobile {
          border-color: black;
          border-width: 1px;
          height: 25px;          
          padding-left: 5px;
          width: 70%;
          font-size: 10pt;
        }
        .search-container-mobile button {
          height: 29px;
          width: 40px;
          margin-left: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
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
        @media only screen and (max-width: 600px) {
          .right-menu-collapse { 
            display: block;
          }
          .right-menu-container {
            display: none;
          }
          .header-wrapper {
            justify-content: space-between;
          }
          .search-container {
            display: none;
          }
          .search-container-mobile {
            display: flex;
          }
        }
        @media only screen and (min-width: 601px) {
          .right-menu-collapse { 
            display: none;
          }
          .right-menu-container {
            display: flex;
          }
          .menu-item {
            margin-right: 10px;
            margin-left: 10px;
          }
          .header-wrapper {
            justify-content: flex-start;
          }
          .search-container {
            display: flex;
          }
          .search-container-mobile {
            display: none;
          }
        }
      `}</style>
    </div> 
  )
}

export default Nav

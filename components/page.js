import React from 'react'
import Head from 'next/head'
import Nav from './nav'
import { useRouter } from 'next/router'
import services from '../services'
import { isObjectEmpty } from '../libs/utils'

export default ({ children, title, description, nofollow }) => {
  const router = useRouter()
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href={services.BASE_FRONT_END_URL + router.pathname} />
        <meta name="description" content={description} />
        {!isObjectEmpty(router.query) || nofollow ?
          <meta name="robots" content="noindex, nofollow" />
        :
          <meta name="robots" content="index, follow" />        
        }        
      </Head>    
  
      <Nav />
      <div className="container">
        <div className="content-wrapper">
          {children}
        </div>
      </div>
  
      <style jsx>{`
        .content-wrapper {
          padding-top: 60px;
        }
      `}</style>
  
      <style global jsx>{`
        body {
          margin: 0px;
        }
        .shadow {
          -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
          -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
          box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
        }
        h1, h2, p, span, a {
          font-family: Arial;
          margin: 0px;
        }      
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media only screen and (max-width: 600px) {
          .content-wrapper {
            align-self: stretch;
          }
          iframe {
            width: 100%;
            height: 50vw;
          }
        }
        @media only screen and (min-width: 601px) {
          .content-wrapper {
            width: 60vw;
          }
          iframe {
            width: 100%;
            height: 30vw;
          }
        }

        .navigation-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .navigation-container ul {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding-left: 0;
          list-style: none;
          border-radius: .25rem;
        }
        .navigation-container ul li {
          display: list-item;
          text-align: -webkit-match-parent;
        }
        .navigation-container ul li a {
          position: relative;
          display: block;
          padding: .5rem .75rem;
          margin-left: -1px;
          line-height: 1.25;
          color: black;
          background-color: #fff;
          border: 1px solid #dee2e6;
          text-decoration: none;
        }
        .alert {
          background-color: #00000034;
          font-size: 10pt;
          padding: 10px;
          margin-bottom: 10px;
        }        
      `}</style>
    </div>
  )
}
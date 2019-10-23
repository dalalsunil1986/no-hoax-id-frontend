import React from 'react'
import Head from 'next/head'
import Nav from './nav'

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>    

    <Nav />
    <div className="container">
      <div className="content-wrapper">
        {children}
      </div>
    </div>

    <style jsx>{`
      .content-wrapper {
        margin-top: 50px;
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
      h2, p, span {
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
      }
      @media only screen and (min-width: 601px) {
        .content-wrapper {
          width: 60vw;
        }
      }
    `}</style>
  </div>
)
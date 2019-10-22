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
    {children}

    <style global jsx>{`
      body {
        margin: 0px;
      }
      .shadow {
        -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
      }
      h2, p {
        font-family: Arial;
        margin: 0px;
      }
    `}</style>
  </div>
)
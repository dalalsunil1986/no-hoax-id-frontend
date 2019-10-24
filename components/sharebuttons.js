import React from 'react'
import { Twitter, Facebook, Telegram, Whatsapp } from 'react-social-sharing'

export default ({ url }) => (
  <div className="content-wrapper">
    <Twitter link={url} />
    <Facebook link={url} />
    <Telegram link={url} />
    <Whatsapp link={url} />

    <style jsx>
    {`
      .content-wrapper {
        width: 100%;
      }
    `}
    </style>
  </div>
)
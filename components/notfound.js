import React from 'react'

export default () => (
  <div className="container">
    <p>404</p>
    <span>Page not found.</span>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 30vh;
      }
      p {
        font-weight: bold;
        font-size: 48pt;
        color: black;
      }
      span {
        font-size: 12pt;
        color: black;
      }
    `}</style>
  </div>
)
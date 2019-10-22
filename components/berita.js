import React from 'react'

export default () => {
  return (
    <div className="container">

      <h2>Judul beritas</h2>

      <img src="/default.png" />

      <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet...</p>

    <style jsx>{`
      .container {
        display: flex;
        align-self: stretch;
        background-color: white;
        z-index: -1;
        flex-direction: column;
        align-items: stretch;
      }
      h2 {
        text-transform: uppercase;        
        font-size: 14pt;
        padding: 10px;
        margin: 0px;
      }
      p {
        padding: 10px;
      }
    `}</style>
    </div>
  )
}
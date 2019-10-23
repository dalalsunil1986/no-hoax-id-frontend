import React from 'react'


export default ({ title, thumbnail, description, content, source, onClick }) => {
  return (
    <a style={{ textDecoration: 'none' }} onClick={onClick}>
      <div 
        className="container"  
      >

        <h2>{title}</h2>

        <img src={thumbnail} />

        {description && <p>{description}</p>}

        {content && <div className="paragraph" dangerouslySetInnerHTML={{ __html: content }}></div>}

        {source && <p>Sumber : {source}</p>}

        <style jsx>{`
          * {
            color: black!important;
          }
          .container {
            display: flex;
            width: 100%;
            background-color: white;
            z-index: -1;
            flex-direction: column;
            align-items: stretch;
          }
          h2 {
            
            text-transform: uppercase;        
            font-size: 14pt; 
            margin: 0px;            
          }
          p, .paragraph {          
            text-decoration: none;
            font-size: 11pt;
          }
          img {
            object-fit: cover;
            width: 100%;
          }
          @media only screen and (max-width: 600px) {
            img {
              height: 50vw;
            }
            h2, p, .paragraph {
              padding: 10px;
            }
          }
          @media only screen and (min-width: 601px) {
            img {
              height: 25vw;
            }
            h2, p, .paragraph {
              padding-top: 10px;
              padding-bottom: 10px;
            }
          }
        `}</style>
      </div>
    </a>
  )
}
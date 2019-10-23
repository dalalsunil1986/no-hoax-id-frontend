import React from 'react'


export default ({ title, thumbnail, created_date, description, content, source, onClick }) => {
  const altTag = title.split(' ').join('-').toLowerCase()
  return (
    <a style={{ textDecoration: 'none', width: '100%' }} onClick={onClick}>
      <div 
        className="container"  
      >

        <h1>{title}</h1>

        <img src={thumbnail} alt={altTag} />

        {created_date && <span>{created_date}</span>}

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
          h1 {
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
          span {
            opacity: 0.5;
            font-size: 9pt;            
            padding-top: 10px;
          }
          @media only screen and (max-width: 600px) {
            img {
              height: 50vw;
            }
            h1, p, .paragraph {
              padding: 10px;
            }
            span {
              padding-left: 10px;
            }
          }
          @media only screen and (min-width: 601px) {
            img {
              height: 25vw;
            }
            h1, p, .paragraph {
              padding-top: 10px;
              padding-bottom: 10px;
            }
          }
        `}</style>
      </div>
    </a>
  )
}
import React from 'react'


export default ({ title, thumbnail, created_date, description, content, source, slug }) => {
  const altTag = title.split(' ').join('-').toLowerCase()
  
  return (
    <a href={`/berita/${slug}`} style={{ textDecoration: 'none', width: '100%' }}>
      <div 
        className="container"  
      >

        <h1>{title}</h1>

        {thumbnail && <img src={thumbnail} alt={altTag} />}

        {created_date && <span>{created_date}</span>}

        {description && <p>{description.substring(0, 200) + '...'}</p>}

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
            margin-top: 10px;
            margin-bottom: 10px;
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
            margin-bottom: 10px;      
          }
          img:before {
            content: " ";
            font-size: 1000px;
            background-image: url("/default.png");
            display: block;
            position: relative;
            z-index: 0;
            margin-bottom: -16px;
          }
          span {
            opacity: 0.5;
            font-size: 9pt;
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
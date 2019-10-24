import React from 'react'
import Page from '../../components/page'
import ShareButtons from '../../components/sharebuttons'
import NotFound from '../../components/notfound'
import services from '../../services'
import fetch from 'isomorphic-unfetch'


const DetailBerita = ({ movie }) => {
  const altTag = movie.title.split(' ').join('-').toLowerCase()
  return (
    <Page 
      title={movie ? movie.title : 'Berita hari ini - NOHOAX.ID'}
      description={movie ? movie.description : 'Berita hari ini.'}
    >
      {movie ?
        <>          
          <div className="movie-container" dangerouslySetInnerHTML={{ __html: movie.content }}></div>          
          <h1>Nonton {movie.title} sub indo</h1>
          <div className="detail-wrapper">            
            <img src={movie.thumbnail} alt={altTag}/>
            <div>
              <p className="date">{movie.release_date} | Published : <time>{movie.date}</time></p>              
              <p className="alert"><b>Categories : {movie.categories}</b></p>
              <p style={{ marginTop: 10, marginBottom: 10 }}>{movie.description}</p>
              <p className="alert"><b>Casts : {movie.casts}</b></p>
              <ShareButtons url={`${services.BASE_FRONT_END_URL}/film/${movie.slug}`} />
            </div>
          </div>
        </>
      : <NotFound />}

      <style jsx>{`
        .detail-wrapper {
          display: flex;
          flex-direction: row;
          margin-top: 10px;
        }
        .movie-container {
          width: 100%;
        }        
        h1 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        img {
          margin-right: 10px;
          height: 200px;
        }
        .date {
          font-size: 9pt;
          margin-bottom: 10px;
        }
      `}</style>
    </Page>
  )
}

DetailBerita.getInitialProps = async function({ query }) {
  try {
    const res = await fetch(services.URL_GET_ONE_MOVIE(query.slug))
    const movie = await res.json()

    return {
      movie
    }
  }catch(err) {
    return {
      movie: null
    }
  }
}

export default DetailBerita
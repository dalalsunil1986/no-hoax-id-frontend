import React from 'react'
import Page from '../../components/page'
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
          
          <h1>{movie.title}</h1>
          <div className="detail-wrapper">            
            <img src={movie.thumbnail} alt={altTag}/>
            <div>
              <p className="alert"><b>JIKA VIDEO TIDAK BISA DIPUTAR. COBA LAGI MENGAKSES MENGGUNAKAN VPN.</b></p>
              <p><b>Categories : {movie.categories}</b></p>
              <p style={{ marginTop: 10 }}>{movie.description}</p>
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
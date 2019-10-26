import React from 'react'
import Pagination from 'react-js-pagination'
import Page from '../../components/page'
import fetch from 'isomorphic-unfetch'
import services from '../../services'
import { useRouter } from 'next/router'
import { navigate } from '../../libs/utils'

const LIMIT = 16

const FilmPage = ({ dataMovie }) => {
  if (!dataMovie) { return null }

  const router = useRouter()
  const { totalDocs, docs, page } = dataMovie
  return (
    <Page 
      title={'Nonton film sub indo gratis - NO-HOAX.COM'}
      description={'Streaming nonton film sub indo gratis film terbaru.'}
    >
      <div className="content-wrapper">
        {docs.map(movie => (
          <a key={movie.slug} href={`/film/${movie.slug}`} className="content-item">
            <img src={movie.thumbnail} alt={movie.title.split(' ').join('-').toLowerCase()}/>
            <div className="detail-wrapper">
              <h2>{movie.title}</h2>
              <p>{movie.categories}</p>
            </div>
            <span className="quality detail-item">{movie.quality || 'HD'}</span>
            {!movie.duration.includes("null") &&
              <span className="duration detail-item">{movie.duration}</span>
            }
          </a>
        ))}
      </div>

      <div className="navigation-container">
        <Pagination
          activePage={page}
          itemsCountPerPage={LIMIT}
          totalItemsCount={totalDocs}
          pageRangeDisplayed={5}
          onChange={(pageNumber) => {
            let url = `/film?page=${pageNumber}&limit=${LIMIT}`
            url += router.query.query ? `&query=${router.query.query}` : ''
            navigate(url)
          }}
        />
      </div>

      <style jsx>{`
        .content-wrapper {
          display: grid;
          grid-gap: 10px;
        }
        .content-item {
          background-color: white;
          position: relative;
        }
        img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .detail-wrapper {
          background-color: #00000080;
          position: absolute;
          bottom: 5px;
          left: 0;
          right: 0;
        }
        .detail-item {
          position: absolute;
          background-color: black;
          color: white;
          font-weight: bold;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 5px;
          padding-right: 5px;
          font-size: 9pt;
        }
        .quality {          
          top: 0;
          left: 0;          
        }
        .duration {
          top: 0;
          right: 0;
        }
        h2 {
          font-size: 10pt;
          color: white;
          padding: 10px 10px 0px 10px;
          text-align: center;
        }
        p {
          padding: 5px 10px 10px 10px;
          color: white;
          font-size: 8pt;
          text-align: center;
        }
        @media only screen and (max-width: 600px) {
          .content-wrapper {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
          }
        }
        @media only screen and (min-width: 601px) {
          .content-wrapper {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </Page>
  )
}

FilmPage.getInitialProps = async function({ query }) {
  try {
    const searchQuery = query.query || ''
    const page = query.page || 1
    const res = await fetch(services.URL_GET_MOVIE(searchQuery, page, LIMIT))
    const dataMovie = await res.json()

    return {
      dataMovie
    }
  }catch(err) {
    return {
      dataMovie: {
        err,
        url: services.URL_GET_BERITA('', 1, LIMIT)
      }
    }
  }
}

export default FilmPage
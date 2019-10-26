import React from 'react'
import Pagination from 'react-js-pagination'
import Berita from '../components/berita'
import Page from '../components/page'
import FlatList from '../components/flatlist'
import fetch from 'isomorphic-unfetch'
import services from '../services'
import { navigate } from '../libs/utils'
import { useRouter } from 'next/router'

const LIMIT = 10

const Home = ({ dataBerita }) => {
  if (!dataBerita) { return null }

  const router = useRouter()
  const { totalDocs, docs, page } = dataBerita
  return (
    <Page 
      title="Berita indonesia terkini - NO-HOAX.COM"
      description="Berita hari ini. Berita terkini dari berbagai media indonesia."
    >      
      <FlatList 
        datas={docs}
        renderItem={(item) => (
          <Berita 
            key={item.slug}
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            created_date={item.created_date}
            slug={item.slug}
          />
        )}
        onEndReached={() => {}}
      />

      <div className="navigation-container">
        <Pagination
          activePage={page}
          itemsCountPerPage={LIMIT}
          totalItemsCount={totalDocs}
          pageRangeDisplayed={5}
          onChange={(pageNumber) => {
            let url = `/?page=${pageNumber}&limit=${LIMIT}`
            url += router.query.query ? `&query=${router.query.query}` : ''
            navigate(url)
          }}
        />
      </div>
    </Page>
  )
}

Home.getInitialProps = async function({ query }) {
  try {
    const searchQuery = query.query || ''
    const page = query.page || 1
    const res = await fetch(services.URL_GET_BERITA(searchQuery, page, LIMIT))
    const dataBerita = await res.json()

    return {
      dataBerita
    }
  }catch(err) {
    return {
      dataBerita: {
        err,
        url: services.URL_GET_BERITA('', 1, LIMIT)
      }
    }
  }
}

export default Home
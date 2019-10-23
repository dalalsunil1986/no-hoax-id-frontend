import React from 'react'
import Berita from '../components/berita'
import Page from '../components/page'
import FlatList from '../components/flatlist'
import fetch from 'isomorphic-unfetch'
import services from '../services'
import { useRouter } from 'next/router'

const FETCH_LIMIT = 100

const Home = ({ beritas }) => {
  const router = useRouter()
  return (
    <Page 
      title="Berita Indonesia - NOHOAX.ID"
      description="Berita hari ini. Berita terkini dari berbagai media indonesia."
    >
      <FlatList 
        datas={beritas}
        renderItem={(item) => (
          <Berita 
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            created_date={item.created_date}
            onClick={() => router.push(`/berita/${item.slug}`)}
          />
        )}
        onEndReached={() => {}}
      />
    </Page>
  )
}

Home.getInitialProps = async function() {
  try {
    const res = await fetch(services.URL_GET_BERITA(FETCH_LIMIT))
    const beritas = await res.json()
    return {
      beritas
    }
  }catch {
    return {
      beritas: []
    }
  }
}

export default Home
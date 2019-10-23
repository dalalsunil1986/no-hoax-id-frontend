import React from 'react'
import Berita from '../../components/berita'
import Page from '../../components/page'
import NotFound from '../../components/notfound'
import services from '../../services'
import fetch from 'isomorphic-unfetch'


const DetailBerita = ({ berita }) => {
  const renderContent = () => {
    if (berita) {
      return (
        <Berita
          title={berita.title}
          thumbnail={berita.thumbnail}
          content={berita.content}
          slug={berita.slug}
          source={berita.url}
          created_date={berita.created_date}
        />
      )
    }
    return <NotFound/>
  }

  return (
    <Page 
      title={berita ? berita.title : 'Berita hari ini - NOHOAX.ID'}
      description={berita ? berita.description : 'Berita hari ini.'}
    >
      {renderContent()}
    </Page>
  )
}

DetailBerita.getInitialProps = async function({ query }) {
  try {
    const res = await fetch(services.URL_GET_ONE_BERITA(query.slug))
    const berita = await res.json()

    return {
      berita
    }
  }catch(err) {
    return {
      berita: null
    }
  }
}

export default DetailBerita
import React from 'react'
import Berita from '../components/berita'
import Page from '../components/page'
import FlatList from '../components/flatlist'
import datas from './datas.json'

const Home = () => (
  <Page title="Home">

    <FlatList 
      style={styles.contentWrapper} 
      datas={datas}
      renderItem={(item, index) => <Berita />}
    />    

    <style jsx>{`
      
    `}</style>
  </Page>
)

const styles = {
  contentWrapper: {
    marginTop: 50
  }
}

export default Home

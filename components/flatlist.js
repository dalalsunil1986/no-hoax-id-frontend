import React, { useEffect } from 'react'
import Spinner from '../components/spinner'

export default ({ datas = [], renderItem, style, loading, onEndReached }) => {

  const handleScroll = (event) => {
      var scrollingElement = event.target.scrollingElement;
      const bottom = scrollingElement.scrollHeight - scrollingElement.scrollTop === scrollingElement.clientHeight;
      if (bottom) {
        onEndReached()
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div 
      className="content-wrapper"
      style={style}
    >      
      
      {datas.map(renderItem)}      

      {loading && <Spinner />}

      <style jsx>{`
        .content-wrapper {
          overflowY: scroll;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }    
      `}</style>
    </div> 
  )
}
import React, { useEffect } from 'react'

export default ({ datas, renderItem, style }) => {

  const handleScroll = (event) => {
      var scrollingElement = event.target.scrollingElement;
      const bottom = scrollingElement.scrollHeight - scrollingElement.scrollTop === scrollingElement.clientHeight;
      if (bottom) {
        alert('BOTTOM!')
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div 
      onClick={() => {alert('test')}}
      style={style}
    >
      
      {datas.map(renderItem)}

      <style jsx>{`
        .content-wrapper {
          overflowY: scroll;
        }    
      `}</style>
    </div> 
  )
}
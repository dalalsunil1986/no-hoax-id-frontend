import React from 'react'

export default ({ style }) => (
  <div style={style} className="lds-dual-ring">
    <style jsx>{`
      .lds-dual-ring {
        display: inline-block;
        width: 64px;
        height: 64px;
        padding-top: 50px;
        padding-bottom: 50px;
      }
      .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid black;
        border-color: black transparent black transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }      
    `}</style>
  </div>   
)
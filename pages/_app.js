import React, { useReducer } from 'react'
import App from 'next/app'

const initialState = {
  beritas: {
    page: 0,
    datas: []
  },
}

const appReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BERITAS':
      return {
        ...state,
        beritas: {
          page: state.beritas.page + 1,
          datas: [state.beritas.datas, ...action.datas]
        }
      }
    default:
      return state
  }
}

export const MyContext = React.createContext({
  state: initialState,
  dispatch: null
});

const App = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  )
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <App>
        <Component {...pageProps} />
      </App>
    )
  }
}

export default MyApp
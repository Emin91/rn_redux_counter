import React from 'react'
import MainScreen from './views/mainScreen'
import { Provider } from 'react-redux'
import { store } from './store'

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
    
  )
}

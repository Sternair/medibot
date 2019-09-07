import React, { useEffect } from 'react'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebase-config'
import Router from './Router'

firebase.initializeApp(firebaseConfig)

const App = () => {
  useEffect(() => {
    firebase.auth().signInAnonymously()
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App

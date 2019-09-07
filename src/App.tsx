import React, { useEffect } from 'react'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthConsumer, FirebaseAuthProvider, IfFirebaseAuthed } from '@react-firebase/auth'
import firebaseConfig from './firebase-config'
import Router from './Router'

firebase.initializeApp(firebaseConfig)

const App = () => {
  useEffect(() => {
    firebase.auth().signInAnonymously()
  }, [])

  return (
    <div className="App">
      <h1>MediBot</h1>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <IfFirebaseAuthed>
          {() => (
            <Router />
          )}
        </IfFirebaseAuthed>
      </FirebaseAuthProvider>
    </div>
  )
}

export default App

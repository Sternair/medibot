import React, { useEffect } from 'react'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthConsumer, FirebaseAuthProvider } from '@react-firebase/auth'
import firebaseConfig from './firebase-config'

firebase.initializeApp(firebaseConfig)

const App: React.FC = () => {
  useEffect(() => {
    firebase.auth().signInAnonymously()
  }, [])

  return (
    <div className="App">
      <h1 style={{ color: 'red' }}>MediBot</h1>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => (
            <pre style={{ height: 300, overflow: 'auto' }}>
              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            </pre>
          )}
        </FirebaseAuthConsumer>
        <iframe
          title="MediBot"
          src="https://webchat.snatchbot.me/2715c805595f52956e1d88c113f1ccce2f6507ca7df65bd4799cf806d6745cd1"
          style={{ height: '80vh', width: '80vw' }}
        />
      </FirebaseAuthProvider>
    </div>
  )
}

export default App

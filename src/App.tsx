import React from 'react'
import './App.css'

const App: React.FC = () => (
  <div className="App">
    <h1>MediBot</h1>
    <iframe
      title="MediBot"
      src="https://webchat.snatchbot.me/2715c805595f52956e1d88c113f1ccce2f6507ca7df65bd4799cf806d6745cd1"
      style={{ height: '80vh', width: '80vw' }}
    />
  </div>
)

export default App

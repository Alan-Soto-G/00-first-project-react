import React from 'react'
import ReactDOM from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard'
import './index.css'

const users = [
    { User: 'Alan Soto', UserName: 'dev_raxxor', isFollowing: false },
    { User: 'Camilo', UserName: 'unkw23', isFollowing: false },
    { User: 'Ana', UserName: 'ana789', isFollowing: false },
    { User: 'Laura', UserName: 'laura23', isFollowing: false },
    { User: 'Juan Andres', UserName: 'UsuarioFácil123', isFollowing: false },
    { User: 'Luis', UserName: 'Luisito', isFollowing: false },
    // Agregar más usuarios según se requiera
]

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <aside className = "tw-cards">
      <h1>A quién seguir</h1>
      {users.map((user, index) => (
        <TwitterFollowCard key={index} {...user} />
      ))}
    </aside>
  </React.StrictMode>
)

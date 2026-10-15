import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import favicon from './assets/logos/logo-bged.jpeg'
import './index.css'
import './polish.css'

const faviconLink = document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/jpeg'
faviconLink.href = favicon
document.head.append(faviconLink)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

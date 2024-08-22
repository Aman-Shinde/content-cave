import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Search from './pages/Search'
import Article from './pages/Article'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <Search/> */}
    {/* <Article/> */}
  </React.StrictMode>,
)
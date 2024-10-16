import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProdProvider from './store/store-context.jsx'

createRoot(document.getElementById('root')).render(
  <ProdProvider>
    <App />
  </ProdProvider>,
)

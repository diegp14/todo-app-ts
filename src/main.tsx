import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'todomvc-app-css/index.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

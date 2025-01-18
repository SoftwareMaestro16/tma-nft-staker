// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Main/App.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

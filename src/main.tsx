// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './components/AppRouter'
import { StrictMode } from 'react'
import { WalletProvider } from './utils/WalletContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <AppRouter />
    </WalletProvider>
  </StrictMode>,
)

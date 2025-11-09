import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageMNC from './pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageMNC />
  </StrictMode>,
)

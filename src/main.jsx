import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageMNC from './pages'
import "./index.css"
import "preline/preline"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageMNC />
  </StrictMode>,
)

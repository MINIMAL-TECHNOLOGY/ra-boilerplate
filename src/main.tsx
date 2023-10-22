import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import SemStudioApp from './App'
import './themes/index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

//----------------------------------------------
root.render(
  <StrictMode>
    <SemStudioApp />
  </StrictMode>,
)

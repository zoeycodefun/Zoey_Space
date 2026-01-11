import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 类型安全的根元素获取
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

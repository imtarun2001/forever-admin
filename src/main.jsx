import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <ProductContextProvider>
        <App />
        <Toaster/>
      </ProductContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './WaptechComponents/context/userContext/Context.jsx'
import { UIContextProvider } from './WaptechComponents/context/PostsContext/Context.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <UIContextProvider>
       <App /> 
      </UIContextProvider>
    </ContextProvider>
  </React.StrictMode>,
)

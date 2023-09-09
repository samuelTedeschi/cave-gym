import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import AlunosPage from './AlunosPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <AlunosPage/>
    </BrowserRouter>
  </React.StrictMode>,
)

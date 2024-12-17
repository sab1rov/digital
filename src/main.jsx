import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./assets/scss/Main.scss"

createRoot(document.querySelector(".wrapper")).render(
  <App />
)
``
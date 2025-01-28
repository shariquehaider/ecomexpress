import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
  } 
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

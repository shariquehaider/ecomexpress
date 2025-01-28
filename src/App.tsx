
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './screens/Home'
import Register from './screens/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/login',
        element: <Register/>
      }
    ]
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


import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './screens/Home'
import Register from './screens/Register'
import Account, { userLoader } from './screens/Account'
import ProtectedRoute from './components/ProtectedRoute'

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
      },
      {
        path: '/account',
        element: <ProtectedRoute><Account/></ProtectedRoute>,
        loader: userLoader
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

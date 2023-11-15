
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Candidate from '../pages/Candidate'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'candidate',
          element: <Candidate />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

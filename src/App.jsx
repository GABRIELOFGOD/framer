
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Candidate from '../pages/Candidate'
import Fiction from '../pages/Fiction'
import About from '../pages/About'
import Contact from '../pages/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/candidate',
          element: <Candidate />
        },
        {
          path: '/fraction',
          element: <Fiction />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

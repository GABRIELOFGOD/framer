import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
const HomeLazy = React.lazy(() => import('../pages/Home'))
const CandidateLazy = React.lazy(() => import('../pages/Candidate'))
const FictionLazy = React.lazy(() => import('../pages/Fiction'))
const AboutLazy = React.lazy(() => import('../pages/About'))
const ContactLazy = React.lazy(() => import('../pages/Contact'))
import Loader from '../components/Loader'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <React.Suspense fallback={<Loader />}>
            <HomeLazy />
          </React.Suspense>
        },
        {
          path: 'candidate',
          element: <React.Suspense fallback={<Loader />}>
            <CandidateLazy />
          </React.Suspense>
        },
        {
          path: 'fraction',
          element: <React.Suspense fallback={<Loader />}>
            <FictionLazy />
          </React.Suspense>
        },
        {
          path: 'about',
          element: <React.Suspense fallback={<Loader />}>
            <AboutLazy />
          </React.Suspense>
        },
        {
          path: 'contact',
          element: <React.Suspense fallback={<Loader />}>
            <ContactLazy />
          </React.Suspense>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

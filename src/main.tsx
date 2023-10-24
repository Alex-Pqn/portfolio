import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './routes/root'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Cv from './pages/Cv/Cv'
// import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '*',
        element: <Error />,
      },
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/cv',
        element: <Cv />,
      },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

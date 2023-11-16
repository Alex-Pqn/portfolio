import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { store } from './store/store'

import Root from './routes/root'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Mentions from './pages/Mentions/Mentions'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
        path: '/mentions',
        element: <Mentions />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
)

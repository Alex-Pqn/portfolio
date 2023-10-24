import '@/styles/globals.scss'
import './root.scss'

import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import DefaultHeader from '@/components/Default/DefaultHeader/DefaultHeader'
import DefaultFooter from '@/components/Default/DefaultFooter/DefaultFooter'

const Root = (): React.JSX.Element => {
  return (
    <div id="app">
      <Helmet>
        <title>Alexandre Paquien • Développeur Web</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <DefaultHeader />
      <main>
        <Outlet />
      </main>
      <DefaultFooter />
    </div>
  )
}

export default Root

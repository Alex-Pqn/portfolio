import '@/styles/globals.scss'
import './root.scss'

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import DefaultHeader from '@/components/Default/DefaultHeader/DefaultHeader'
import DefaultFooter from '@/components/Default/DefaultFooter/DefaultFooter'

const Root = (): React.JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Alexandre Paquien • Développeur Web</title>
        <meta name="robots" content="index,follow" />
      </Helmet>

      {/* App */}
      <div id="app">
        <DefaultHeader />
        <main>
          <Outlet />
          <ScrollRestoration />
        </main>
        <DefaultFooter />
      </div>
    </>
  )
}

export default Root

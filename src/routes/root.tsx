import '@/styles/globals.scss'
import './root.scss'

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useLocation } from 'react-router-dom'
import DefaultHeader from '@/components/Default/DefaultHeader/DefaultHeader'
import DefaultFooter from '@/components/Default/DefaultFooter/DefaultFooter'

const Root = (): React.JSX.Element => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Alexandre Paquien • Développeur Web</title>
      </Helmet>

      {/* App */}
      <div id="app">
        <DefaultHeader />
        <main>
          <Outlet />
        </main>
        <DefaultFooter />
      </div>
    </>
  )
}

export default Root

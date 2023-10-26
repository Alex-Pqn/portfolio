import '@/styles/globals.scss'
import './root.scss'

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import DefaultHeader from '@/components/Default/DefaultHeader/DefaultHeader'
import DefaultFooter from '@/components/Default/DefaultFooter/DefaultFooter'

const Root = (): React.JSX.Element => {
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

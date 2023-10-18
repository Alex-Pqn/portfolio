import '@/styles/globals.scss'
import './root.scss'

import React from 'react'
import { Outlet } from 'react-router-dom'
import DefaultHeader from '@/components/Default/DefaultHeader/DefaultHeader'
import DefaultFooter from '@/components/Default/DefaultFooter/DefaultFooter'

const Root = (): React.JSX.Element => {
  return (
    <div id="app">
      <DefaultHeader />
      <main>
        <Outlet />
      </main>
      <DefaultFooter />
    </div>
  )
}

export default Root

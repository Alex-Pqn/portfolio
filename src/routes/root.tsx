import '@/styles/globals.scss'
import './root.scss'

import { Helmet } from 'react-helmet-async'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/ErrorFallback/ErrorFallback'
import DefaultHeader from '@/components/Default/DefaultHeader/DefaultHeader'
import DefaultFooter from '@/components/Default/DefaultFooter/DefaultFooter'

function Root() {
  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Alexandre Paquien • Développeur Web</title>
        <meta name="robots" content="index,follow" />
      </Helmet>
      {/* App */}
      <div id="app">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DefaultHeader />
          <main>
            <Outlet />
            <ScrollRestoration />
          </main>
          <DefaultFooter />
        </ErrorBoundary>
      </div>
    </>
  )
}

export default Root

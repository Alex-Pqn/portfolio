import '@/styles/globals.scss'
import './root.scss'

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Photo from '@/assets/photo.jpg'
import DefaultHeader from '@/components/Default/DefaultHeader/DefaultHeader'
import DefaultFooter from '@/components/Default/DefaultFooter/DefaultFooter'

const Root = (): React.JSX.Element => {
  const siteName: string = 'Alexandre Paquien'
  const siteTitle: string = `${siteName} • Développeur Web`
  const siteDescription: string = `Portfolio de ${siteName}, Développeur Web.`
  const siteUrl: string = 'https://alexandrepaquien.com'

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>{siteTitle}</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={siteDescription} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteUrl + Photo} />
        <meta property="og:image:alt" content={siteName} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={siteTitle} />
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

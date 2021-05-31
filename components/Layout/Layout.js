import React from 'react'
import Head from 'next/head'

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='img/icon.jpg' type='image/jpg' />
      </Head>
      {children}
    </>
  )
}

Layout.defaultProps = {
  title: 'CGPA Finder',
  description: 'CGPA finder',
  keywords: 'CGPA',
}
export default Layout

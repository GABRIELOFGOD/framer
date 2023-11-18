import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='layout w-full box-border'>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
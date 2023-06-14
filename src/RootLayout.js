import React from 'react'
import { Navbar } from './screens/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div>
        <Navbar/>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

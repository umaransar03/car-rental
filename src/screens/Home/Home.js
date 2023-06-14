import React from 'react'
import { Landing } from '../landing/Landing'
import { Trip } from '../trip/trip'
import { Banner } from '../banner/Banner'
import { Choose } from '../choose/Choose'
import { Testimonials } from '../Testimonials/Testimonials'
import { DownloadApp } from '../downloadApp/DownloadApp'
import { Footer } from '../footer/Footer'
import { Navbar } from '../Navbar/Navbar'

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Landing />
            <Trip />
            <Banner />
            <Choose />
            <Testimonials />
            <DownloadApp />
            <Footer />
        </div>
    )
}

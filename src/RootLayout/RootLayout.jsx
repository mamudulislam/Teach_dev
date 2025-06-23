import React from 'react'
import Navbar from '../GolobalComponentes/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../GolobalComponentes/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout
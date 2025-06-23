import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import RootLayout from './RootLayout/RootLayout'
import About from './pages/About/About'
import Product from './pages/Product/Product'
import Success from './pages/Success/Success'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Success' element={<Success />} />
        </Route >
      </Route >

    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
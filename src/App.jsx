import React from 'react'
import Navbar from './components/Navbar'
import Hotdeals from './components/Hotdeals'
import { About } from './components/About'
import Products from './components/Products'
import Footer from './components/Footer'
import Comments from './components/comments'


const App = () => {
  return (
    <div>
      <Navbar />
      < Hotdeals/>
      <About />
      <Products />
      <Comments />
      < Footer/>
      </div>
  )
}

export default App
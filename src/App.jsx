import React from 'react'
import Navbar from './components/Navbar'
import Hotdeals from './components/Hotdeals'
import { About } from './components/About'
import Products from './components/Products'
import Footer from './components/Footer'
import Comments from './components/comments'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      < Hotdeals/>
      <About />
      <Products />
      <Comments />
      < Footer />
    </div>
  );
}

export default App

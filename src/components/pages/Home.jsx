import React from 'react'
import SliderPage from './SliderPage'
import Products from './Products'
import DesignYourOwn from './DesignYourOwn'
import About from './About'
import Contact from './Contact'

const Home = () => {
    return (
        <div id="Home" className="home">
            <SliderPage/>
            <Products/>
            <DesignYourOwn/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home

import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider /> 
            <Categories />
            <Products />
            <Newsletter/>
            <Footer />
        </div> 
    )
}

export default Home

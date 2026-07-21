import React from 'react'
import HomeHeroSection from '../../components/Home/HomeHeroSection'
import HomeAboutSection from '../../components/Home/HomeAboutSection'
import HomeGallerySection from '../../components/Home/HomeGallerySection'
import HomeContactSection from '../../components/Home/HomeContactSection'

const Home = () => {
    return (
        <main id='main'>
            <HomeHeroSection />
            <HomeAboutSection />
            <HomeGallerySection />
            <HomeContactSection />
        </main>
    )
}

export default Home

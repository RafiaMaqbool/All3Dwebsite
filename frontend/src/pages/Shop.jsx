import React from 'react'
import Hero from '../components/LandingPage/Hero/Hero'
import Features from '../components/LandingPage/FeaturedBrands/Featured'
import OfferedProducts from '../components/LandingPage/OfferedProducts/OfferedProducts'
import OtherServices from '../components/LandingPage/OtherServices/OtherServices'
import Footer from '../components/footer/Footer'




const Shop = () => {
  return (
    <div>
      <Hero title="The Future of Ecommerce"
      subtitle={["AI-Powered 3D Models", "for Online Shopping"]}
      buttonText="Get Started for Free"
      imageSrc="https://d48f7equ64qjl.cloudfront.net/product_assets/perspective_renders/28795_FrontAngled.jpg"
      modelSrc="https://d48f7equ64qjl.cloudfront.net/static_files/hero_section_assets/28795.glb"/>
      <Features/>
      <OfferedProducts/>
      <OtherServices/>
      <Footer/>
      
      

    </div>
  )
}

export default Shop

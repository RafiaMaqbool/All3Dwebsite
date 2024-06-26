import React from 'react'
import Hero from '../components/LandingPage/Hero/Hero'
import Features from '../components/LandingPage/FeaturedBrands/Featured'
import OfferedProducts from '../components/LandingPage/OfferedProducts/OfferedProducts'
import OtherServices from '../components/LandingPage/OtherServices/OtherServices'
import Footer from '../components/footer/Footer'

import img1 from '../components/assets/table.png';
import img2 from '../components/assets/greenchair.png';
import img3 from '../components/assets/greychair.jpg';
import img4 from '../components/assets/lamp.png';
import img5 from '../components/assets/lgsofa.png';
import img6 from '../components/assets/stonetable.png';
import img7 from '../components/assets/var1.png';
import img8 from '../components/assets/var2.png';
import img9 from '../components/assets/var3.png';
import img10 from '../components/assets/interior1.png';
import img11 from '../components/assets/interior2.png';
import img12 from '../components/assets/interior3.png';
import img13 from '../components/assets/interior4.png';
import img14 from '../components/assets/interior5.png';

const services = [
  "Design a virtual product in 3D - without ever creating a physical sample",
  "Create a virtual 3D model of your existing product",
  "Upload your existing 3D product models"
];

const images = [img1, img2, img3, img4, img5, img6];
const variantImages = [img7, img8, img9];
const interiorImages = [img10, img11, img12, img13, img14];

const Shop = () => {
  return (
    <div>
      <Hero title="The Future of Ecommerce"
      subtitle={["AI-Powered 3D Models", "for Online Shopping"]}
      buttonText="Get Started for Free"
      imageSrc="https://d48f7equ64qjl.cloudfront.net/product_assets/perspective_renders/28795_FrontAngled.jpg"
      modelSrc="https://d48f7equ64qjl.cloudfront.net/static_files/hero_section_assets/28795.glb"/>
      <Features/>
      <OfferedProducts
      services={services}
      images={images}
      variantImages={variantImages}
      interiorImages={interiorImages}
      modelSrc="https://d48f7equ64qjl.cloudfront.net/product_assets/glb/10826.glb"/>
      
      <OtherServices/>
      <Footer/>
      
      

    </div>
  )
}

export default Shop

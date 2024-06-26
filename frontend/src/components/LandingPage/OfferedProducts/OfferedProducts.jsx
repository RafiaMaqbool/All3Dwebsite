import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductSection from './ProductSection';
import { FlexContainer } from '../../styles/GlobalStyles';

import img15 from '../../assets/interior6.jpg';
import img16 from '../../assets/items.png';

const Offering = styled.h1`
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #2b3240;
  padding-top: 40px;
`;

const ServicesList = styled.ul`

  margin-top: 10px;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;


  }
`;

const ServiceItem = styled.li`
  font-family: "Roboto", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: rgba(43, 50, 64, 0.8);

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    order: ${props => props.reverseOrder ? '2' : '1'};

  }

`;

const Heading =styled.h3`
  @media (max-width: 768px) {
  text-align: center;
  }
`;


const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 40px -12px rgba(0, 0, 0, .12);

  #DiningChair {
    width: 100%;
    height: 400px;
    max-width: 800px;
  }
  @media (max-width: 768px) {
  max-width: 100%;
  order: 2;
  }
`;

const OfferedProducts = ({ modelSrc, images, services, variantImages, interiorImages}) => {
  


  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVariantImage, setCurrentVariantImage] = useState(variantImages[0]);
  const [variantIndex, setVariantIndex] = useState(0);
  const [currentInteriorImage, setCurrentInteriorImage] = useState(interiorImages[0]);
  const [interiorIndex, setInteriorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setCurrentImage(images[currentIndex]);
  }, [currentIndex, images]);

  useEffect(() => {
    const variantInterval = setInterval(() => {
      setVariantIndex((prevIndex) => (prevIndex + 1) % variantImages.length);
    }, 5000); // Change variant image every 5 seconds

    return () => clearInterval(variantInterval);
  }, [variantImages.length]);

  useEffect(() => {
    setCurrentVariantImage(variantImages[variantIndex]);
  }, [variantIndex, variantImages]);

  useEffect(() => {
    const interiorInterval = setInterval(() => {
      setInteriorIndex((prevIndex) => (prevIndex + 1) % interiorImages.length);
    }, 5000); // Change interior image every 5 seconds

    return () => clearInterval(interiorInterval);
  }, [interiorImages.length]);

  useEffect(() => {
    setCurrentInteriorImage(interiorImages[interiorIndex]);
  }, [interiorIndex, interiorImages]);

  return (
    <div className='Products'>
      <Offering>Our Product Offering</Offering>
      <FlexContainer>
        <Row className='row-one'>
          <ImageContainer>
            <model-viewer
              environment-image="neutral"
              className="disablehover model-viewer-class virtual-product"
              loading="eager"

              ar="true"
              data-js-focus-visible="true"
              shadow-intensity="1"
              interaction-policy="always-allow"
              src={modelSrc}
              alt="Velvet Hagen Dining Chair"
              auto-rotate="true"
              camera-controls="true"
              interaction-prompt-threshold="0"
              ar-modes="webxr scene-viewer quick-look"
              background-color="#FFFFFF"
              ar-status="not-presenting"
              id="DiningChair"
            />
          </ImageContainer>
          <Column className='column-text'>
            <Heading className='Service'>Design & Create Virtual Products</Heading>
            <ServicesList className='Services'>
            {services.map((service, index) => (
              <ServiceItem key={index}>{service}</ServiceItem>
            ))}
        </ServicesList>
          </Column>
        </Row>
        <ProductSection
        title='Generate Product Imagery'
        imagery='Use our browser-based silo software to virtually generate product imagery with a few clicks.'
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        images={images}
        imageFirst={false}
        showDots={true}
      />
      <ProductSection
        title='Create Product Variants'
        imagery='Infinitely customize your virtual products by changing the color, size and component parts.'
        currentImage={currentVariantImage}
        setCurrentImage={setCurrentVariantImage}
        images={variantImages}
        imageFirst={true}
        showDots={true}

      />
      <ProductSection 
        title='Create Spaces Or Showrooms'
        imagery='Design virtual experiences and showrooms in hours that would be cost-prohibitive to create in the physical world.'
        currentImage={currentInteriorImage}
        setCurrentImage={setCurrentInteriorImage}
        images={interiorImages}
        imageFirst={false}
        showDots={true}

      />
        <ProductSection
        title="ALL3D Store"
        imagery="Buy and sell virtual products and spaces to design your lifestyles and showrooms."
        currentImage={img15}
        imageFirst={true}
        showDots={false}
      />
      <ProductSection
        title="Create Your Brand Page"
        imagery="Sell your items on the ALL3D Store by creating your own brand page."
        currentImage={img16}
        imageFirst={false}
        showDots={false}
      />
      </FlexContainer>
    </div>
  );
};

export default OfferedProducts;
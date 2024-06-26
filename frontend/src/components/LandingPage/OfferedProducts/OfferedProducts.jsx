import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import img1 from '../../assets/table.png';
import img2 from '../../assets/greenchair.png';
import img3 from '../../assets/greychair.jpg';
import img4 from '../../assets/lamp.png';
import img5 from '../../assets/lgsofa.png';
import img6 from '../../assets/stonetable.png';
import img7 from '../../assets/var1.png';
import img8 from '../../assets/var2.png';
import img9 from '../../assets/var3.png';
import img10 from '../../assets/interior1.png';
import img11 from '../../assets/interior2.png';
import img12 from '../../assets/interior3.png';
import img13 from '../../assets/interior4.png';
import img14 from '../../assets/interior5.png';
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
  padding: 60px 150px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
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

const Image = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 40px -12px rgba(0, 0, 0, .12);

`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const DotsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Dot = styled.li`
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px 10px;
  box-shadow: 2px 2px 2px rgba(109, 109, 109, 0.5);
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  opacity: 0.7;

  &.active {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    opacity: 1.0;
  }

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    opacity: 1.0;
  }
`;

const SiloPhotography = styled.h4`
  color: rgba(43, 50, 64, 0.8);
`;

const Text = styled.div`
  font-family: "Roboto", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

   @media (max-width: 768px) {
    order: 1;
  }
`;


const OfferedProducts = ({ sections }) => {
  const images = useMemo(() => [img1, img2, img3, img4, img5, img6], []);
  const variantImages = useMemo(() => [img7, img8, img9], []);
  const interiorImages = useMemo(() => [img10, img11, img12, img13, img14], []);

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
              poster=""
              ar="true"
              data-js-focus-visible="true"
              shadow-intensity="1"
              interaction-policy="always-allow"
              src="https://d48f7equ64qjl.cloudfront.net/product_assets/glb/10826.glb"
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
            <h3 className='Service'>Design & Create Virtual Products</h3>
            <ServicesList className='Services'>
              <ServiceItem>Design a virtual product in 3D - without ever creating a physical sample</ServiceItem>
              <ServiceItem>Create a virtual 3D model of your existing product</ServiceItem>
              <ServiceItem>Upload your existing 3D product models</ServiceItem>
            </ServicesList>
          </Column>
        </Row>
        <Row className='row-two'>
          <Column className='column-text'>
            <h3 className='ProdImagery'>Generate Product Imagery</h3>
            <SiloPhotography className='SiloPhotography'>Create silo photography and 360s</SiloPhotography>
            <p className='SiloSoftware'>
              Use our browser-based silo software to virtually generate product imagery with a few clicks.
            </p>
          </Column>
          <Column className='column-image'>
            <Image src={currentImage} alt='Product' />
            <DotsContainer className='dots-container'>
              <DotsList className='dots'>
                {images.map((image, index) => (
                  <Dot
                    key={index}
                    className={`dot ${currentImage === image ? 'active' : ''}`}
                    onClick={() => setCurrentImage(image)}
                  ></Dot>
                ))}
              </DotsList>
            </DotsContainer>
          </Column>
        </Row>
        <Row className='row-three'>
          <Column className='column-image' reverseOrder>
            <ImageContainer>
              <Image src={currentVariantImage} alt='Product Variant' />
              <DotsContainer className='dots-container'>
                <DotsList className='dots'>
                  {variantImages.map((image, index) => (
                    <Dot
                      key={index}
                      className={`dot ${currentVariantImage === image ? 'active' : ''}`}
                      onClick={() => setCurrentVariantImage(image)}
                    ></Dot>
                  ))}
                </DotsList>
              </DotsContainer>
            </ImageContainer>
          </Column>
          <Column className='column-text'>
            <Text>
              <h3>Create Product Variants</h3>
              <p>Infinitely customize your virtual products by changing the color, size and component parts.</p>
            </Text>
          </Column>
        </Row>
        <Row className='row-four'>
          <Column className='column-text'>
          <Text>
            <h3>Create Spaces Or Showrooms</h3>
            <p>Design virtual experiences and showrooms in hours that would be cost-prohibitive to create in the physical world.</p>
            </Text>
          </Column>
          <Column className='column-image'>
            <Image src={currentInteriorImage} alt='Product Variant' />
            <DotsContainer className='dots-container'>
              <DotsList className='dots'>
                {interiorImages.map((image, index) => (
                  <Dot
                    key={index}
                    className={`dot ${currentInteriorImage === image ? 'active' : ''}`}
                    onClick={() => setCurrentInteriorImage(image)}
                  ></Dot>
                ))}
              </DotsList>
            </DotsContainer>
          </Column>
        </Row>
        <Row className='row-five' >
          <Column className='column-image' reverseOrder>
            <Image src={img15} alt='Product Variant' />
          </Column>
          <Column className='column-text'>
          <Text>
            <h3>ALL3D Store</h3>
            <p>Buy and sell virtual products and spaces to design your lifestyles and showrooms.</p>
            </Text>
          </Column>
        </Row>
        <Row className='row-six'>
          <Column className='column-text'>
          <Text>
            <h3>Create Your Brand Page</h3>
            <p>Sell your items on the ALL3D Store by creating your own brand page.</p>
            </Text>
          </Column>
          <Column className='column-image'>
            <Image src={img16} alt='Product Variant' />
          </Column>
        </Row>

      </FlexContainer>
    </div>
  );
};

export default OfferedProducts;
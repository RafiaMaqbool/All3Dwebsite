import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../../assets/room1.png';
import img2 from '../../assets/room2.jpg';
import img3 from '../../assets/room3.png';
import img4 from '../../assets/room4.jpg';
import img5 from '../../assets/room5.jpg';
import img6 from '../../assets/bed.jpg';
import img7 from '../../assets/mobile.jpg';
import img8 from '../../assets/phonescreen2.jpg';
import ProductSection from '../OfferedProducts/ProductSection';
import { FlexContainer } from '../../styles/GlobalStyles';


const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 60px 20px 20px 20px;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 33.33%;
  box-sizing: border-box;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 80%;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    width: 95%;
    justify-content: space-between;
    padding: 0 10px;
  }
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 20%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 2px solid #edc091;
  color: #edc091;

  &:hover {
    background-color: #edc091;
    color: #fff;
  }
`;

const Heading = styled.h3`
  font-family: "Roboto", serif;
  font-weight: 500;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-family: "Roboto", serif;
  font-weight: 400;
  padding: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Configurator = styled.div`
  text-align: center;
  padding: 20px;
`;

const ConfiguratorImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const SketchfabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 20px;
  padding: 30px;
  height: 600px;
  width: 100%;

  @media (max-width: 768px) {
    height: 400px;
    max-width: 90%;
  }
`;

const SketchfabFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];
  const totalImages = images.length;

  const nextSlide = () => {
    if (currentIndex === totalImages - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalImages - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const translateXValue = -(currentIndex * 100) / (window.innerWidth < 768 ? 1 : 3);

  return (
    <Container>
      <CarouselContainer>
        <Heading>Create Lifestyle Images Or Room Scenes</Heading>
        <Paragraph>
          Design 3D virtual experiences that can be rendered as 2D photographs from any angle with results that surpass actual photography.
        </Paragraph>
        <ButtonContainer>
          <Button onClick={prevSlide}>&#9664;</Button>
          <Button onClick={nextSlide}>&#9654;</Button>
        </ButtonContainer>
        <CarouselTrack style={{ transform: `translateX(${translateXValue}%)` }}>
          {[...images, ...images.slice(0, window.innerWidth < 768 ? 1 : 3)].map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} alt={`Slide ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>
      <Configurator>
        <Heading>Realtime Configurator</Heading>
        <Paragraph>
          Virtual products can be infinitely customized by end-consumers by changing attributes like color, materials and component parts. These are made-to-order products.
        </Paragraph>
        <ConfiguratorImage src={img6} alt="Configurator Image" />
      </Configurator>
      <Heading>Create 3D Tours
      </Heading>
      <SketchfabWrapper>
        <SketchfabFrame
          title="room"
          frameBorder="0"
          allowFullScreen
          mozAllowFullScreen="true"
          webkitAllowFullScreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/4831c2ce6a0044d9bee9eacefcc0f2bd/embed?autospin=1&autostart=1&camera=0&preload=1&ui_infos=0&ui_stop=0"
        ></SketchfabFrame>
      </SketchfabWrapper>
      <FlexContainer>
      <ProductSection
        title="Generate Social Media Content"
        imagery="Use ALL3D library of products and spaces to create content for all your social media channels."
        currentImage={img7}
        imageFirst={true}
        showDots={false}
      />
      <ProductSection
        title="3D Scan Your Products & Spaces"
        imagery="Use the latest depth sensing LIDAR technology on your iPhone to enable scanning of physical products and spaces"
        currentImage={img8}
        imageFirst={false}
        showDots={false}
      />
      <video class="position-iphone-video" autoplay="" loop="" playsinline="">
      <source src="https://d48f7equ64qjl.cloudfront.net/static_files/product_offerings/section7.mp4" type="video/mp4"></source></video>
       </FlexContainer>
    </Container>
  );
};

export default Carousel;

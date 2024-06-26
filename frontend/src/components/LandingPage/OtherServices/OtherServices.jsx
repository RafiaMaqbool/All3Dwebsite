import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../../assets/room1.png';
import img2 from '../../assets/room2.jpg';
import img3 from '../../assets/room3.png';
import img4 from '../../assets/room4.jpg';
import img5 from '../../assets/room5.jpg';
import img6 from '../../assets/bed.jpg';
import img7 from '../../assets/mobile.jpg';
import img8 from '../../assets/phone.png';

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 60px 20px 20px 20px; /* Add extra top padding to move the carousel lower */

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
  width: 33.33%; /* Show three images on larger screens */
  box-sizing: border-box;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%; /* Show one image at a time on smaller screens */
    display: flex;
    justify-content: center; /* Center aligns the image */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 80%; /* Reduce image size on smaller screens */
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
  outline: none; /* Remove default outline */

  /* Colored outline */
  border: 2px solid #edc091; /* Replace #6c63ff with your desired color */
  color: #edc091; /* Text color matches outline color */

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
  margin-top: 20px; /* Adjust margin as needed */
`;

const SketchfabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 20px; /* Adjust margin as needed */
  padding: 30px;
  height: 600px; /* Adjust the height as per your requirement */
  width: 100%;

  @media (max-width: 768px) {
    height: 400px; /* Adjust height for smaller screens if needed */
    max-width: 90%;
  }
`;

const SketchfabFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  gap: 80px;
  justify-content: center;
  align-items: start;
  padding: 60px 150px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  justify-content: flex-start;
  align-items: center;
`;

const Column = styled.div`
  display: grid;
  justify-items: flex-start;
  align-items: center;
  position: relative;
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
      <Grid>
        <Row>
          <Column>
            <Image src={img7} alt="Product Variant" />
          </Column>
          <Column>
            <h3>ALL3D Store</h3>
            <p>Buy and sell virtual products and spaces to design your lifestyles and showrooms.</p>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>3D Scan Your Products & Spaces</h3>
            <p>Use the latest depth sensing LIDAR technology on your iPhone to enable scanning of physical products and spaces.</p>
          </Column>
          <Column>
            <Image src={img8} alt="Product Variant" />
          </Column>
        </Row>
      </Grid>
    </Container>
  );
};

export default Carousel;

import React from 'react';
import styled from 'styled-components';
import sofa from '../../assets/sofa.svg';

// Styled components
const MainContainer = styled.div`
  /* styles for .Main-Container */
`;

const FeaturedIn = styled.div`
  display: flex;
  background: #f7f4ee;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FeaturedGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const FeaturedImg = styled.img`
  max-width: 200px;
  height: auto;
  object-fit: contain;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const AiContent = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 150px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px;
  }
`;

const ImageWrapper = styled.div`
  order: 1; /* Ensures the image is displayed after the text for normal display */
  flex: 1; /* Takes up remaining space */
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    order: 2; /* Ensure image is at the bottom on smaller screens */
  }
`;

const Description = styled.div`
  order: 2; /* Ensures the text is displayed before the image for normal display */
  flex: 1; /* Takes up remaining space */
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  color: rgba(43, 50, 64, 0.8);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const SubHeading = styled.h3`
  color: rgba(43, 50, 64, 0.8);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Paragraph = styled.p`
  color: rgba(54, 54, 54, 0.712);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Features = () => {
  return (
    <MainContainer>
      <FeaturedIn>
        <FeaturesWrapper>
          <FeaturedGrid>
            <Heading>FEATURED IN</Heading>
            <FeaturedImg
              src="https://d48f7equ64qjl.cloudfront.net/static_files/press_logos/apartment_theory.png"
              alt="Apartment Theory"
              className="load-lazy"
            />
            <FeaturedImg
              src="https://d48f7equ64qjl.cloudfront.net/static_files/press_logos/ad.png"
              alt="Architectural Digest"
              className="AD load-lazy"
            />
            <FeaturedImg
              src="https://d48f7equ64qjl.cloudfront.net/static_files/press_logos/business_of_home.png"
              alt="Business of Home"
              className="load-lazy"
            />
            <FeaturedImg
              src="https://d48f7equ64qjl.cloudfront.net/static_files/press_logos/furniture_today.png"
              alt="Furniture Today"
              className="load-lazy"
            />
          </FeaturedGrid>
        </FeaturesWrapper>
      </FeaturedIn>
      <AiContent>
        <Description>
          <SubHeading>Our proprietary AI process creates a high-quality 3D model</SubHeading>
          <Paragraph>Our AI model generates multiple views of your product from a single image, then uses neural surface reconstruction to build a 3D model.</Paragraph>
          <Paragraph>With a 3D model, you can quickly generate an unlimited amount of photorealistic images including product silos, lifestyle images, 360 spins, and even embed AR on your PDP.</Paragraph>
        </Description>
        <ImageWrapper>
          <img src={sofa} alt='' />
        </ImageWrapper>
      </AiContent>
    </MainContainer>
  );
};

export default Features;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import insta from '../assets/insta.png';
import twt from '../assets/twt.png';
import li from '../assets/linkedin.png';
import fb from '../assets/fb.png';
import appstore from '../assets/appstore.png';

// Styled components
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 0;
    flex-shrink: 0;

`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 150px;
  background-color: ${({ bgColor }) => bgColor};
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 20px;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;

  img {
    height: 30px;
    width: 30px;
  }
  
  @media (max-width: 768px) {
    img {
      height: 20px;
      width: 20px;
    }
  }
`;

const AppStoreContainer = styled.div`
  img {
    height: 50px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Text = styled.div`
  color: white;
  
  @media (max-width: 768px) {
    margin-top: 10px;
    order: 2;
  }
`;

const Logo = styled.div`
  height: 30px;

  img {
    height: 100%; /* to scale logo to div size */
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    order: 1;
  }
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection bgColor="#3b404f">
        <SocialMediaContainer>
          <a href="https://www.instagram.com"><img src={insta} alt="Instagram" /></a>
          <a href="https://www.twitter.com"><img src={twt} alt="Twitter" /></a>
          <a href="https://www.linkedin.com"><img src={li} alt="LinkedIn" /></a>
          <a href="https://www.facebook.com"><img src={fb} alt="Facebook" /></a>
        </SocialMediaContainer>
        <AppStoreContainer>
          <a href="https://www.apple.com/app-store/"><img src={appstore} alt="App Store" /></a>
        </AppStoreContainer>
      </FooterSection>
      <FooterSection bgColor="#2b3240">
        <Text>ALL3D, 2024. All Rights Reserved</Text>
        <Logo>
          <Link to='/'><img src={logo} alt='logo' /></Link>
        </Logo>
      </FooterSection>
      
    </FooterContainer>
  );
}

export default Footer;

import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  padding: 20px;
  height: 80vh;
  align-items: center;
  margin-top: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 40px;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 130px;
  line-height: 1;

  h3 {
    font-size: 25px;
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 0;

    @media (max-width: 780px) {
      font-size: 20px;
    }
  }

  h1 {
    font-size: 46px;
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    margin-top: 0.5em;

    &.second {
      color: #276dd7;
    }

    @media (max-width: 780px) {
      font-size: 36px;
    }
  }

  @media (max-width: 780px) {
    text-align: center;
    padding-left: 0;
  }
`;

const HeroButton = styled.div`
  margin-top: 20px;

  button {
    background-color: #276dd7;
    color: white;
    font-size: 16px;
    font-weight: 500;
    padding: 20px;
    cursor: pointer;
    background: #276dd7;
    border: none;
    border-radius: 4px;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 130px;

  @media (max-width: 780px) {
    padding-right: 0;
  }
`;

const ModelOne = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 40px -12px rgba(0, 0, 0, 0.12);
`;

const ModelViewerWrapper = styled.div`
  width: 100%;
  height: 400px;
  max-width: 1000px;

  model-viewer {
    width: 100%;
    height: 100%;
  }
`;

const Hero = ({ title, subtitle, buttonText, imageSrc, modelSrc }) => {
  return (
    <HeroContainer>
      <HeroLeft>
        <h3>{title}</h3>
        <h1 className='first'>{subtitle[0]}</h1>
        <h1 className='second'>{subtitle[1]}</h1>
        <HeroButton>
          <button>{buttonText}</button>
        </HeroButton>
      </HeroLeft>
      <HeroRight>
        <ModelOne>
          <ModelViewerWrapper>
            <model-viewer
              environment-image="neutral"
              class="disablehover virtual-product header model-viewer-pos"
              ar="true"
              data-js-focus-visible="true"
              poster={imageSrc}
              shadow-intensity="1"
              interaction-policy="always-allow"
              src={modelSrc}
              alt="3D Model"
              auto-rotate="true"
              camera-controls="true"
              interaction-prompt-threshold="0"
              ar-modes="webxr scene-viewer quick-look"
              background-color="#FFFFFF"
              ar-status="not-presenting"
            ></model-viewer>
          </ModelViewerWrapper>
        </ModelOne>
      </HeroRight>
    </HeroContainer>
  );
};

export default Hero;

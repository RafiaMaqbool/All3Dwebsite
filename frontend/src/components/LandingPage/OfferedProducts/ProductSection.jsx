// ProductSection.js
import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;

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

const ProductSection = ({ title, imagery, currentImage, setCurrentImage, images, imageFirst, showDots }) => {
  return (
    <Row className='product-section'>
      {imageFirst ? (
        <>
          <Column className='column-image' reverseOrder>
            <Image src={currentImage} alt='Product' />
            {showDots && (
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
            )}
          </Column>
          <Column className='column-text'>
            <h3 className='ProdImagery'>{title}</h3>
            <p className='SiloSoftware'>
              {imagery}
            </p>
          </Column>
        </>
      ) : (
        <>
          <Column className='column-text'>
            <h3 className='ProdImagery'>{title}</h3>
            <p className='SiloSoftware'>
              {imagery}
            </p>
          </Column>
          <Column className='column-image'>
            <Image src={currentImage} alt='Product' />
            {showDots && (
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
            )}
          </Column>
        </>
      )}
    </Row>
  );
};

export default ProductSection;

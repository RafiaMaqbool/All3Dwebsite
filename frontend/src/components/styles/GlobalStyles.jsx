// StyledComponents.js
import styled from 'styled-components';

export const FlexContainer = styled.div`
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


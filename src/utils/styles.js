import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LayoutStyle = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const DescriptionStyle = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const ImageStyle = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    border-radius: 50%;
    @media (max-width: 1260px) {
      height: 90vh;
      width: 65%;
    }
    @media (max-width: 560px) {
      height: 60vh;
      width: 100%;
    }
  }
`;

export const HideStyle = styled.div`
  overflow: hidden;
`;

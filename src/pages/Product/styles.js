import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const transitionIn = keyframes`
  from {
    transform: translateX(-300px);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const ProductDetail = styled.div`
  animation: ${transitionIn} 1s;

  display: flex;
  justify-content: center;

  background: #fff;
  border-radius: 4px;
  padding: 20px;

  ${media.lessThan('650px')`
    flex-direction: column;
  `}
`;

export const Picture = styled.div`
  margin: 5vw;

  img {
    height: 300px;

    ${media.lessThan('650px')`
      height: 270px;
    `}
  }
`;

export const Info = styled.div`
  padding: 20px;

  ${media.lessThan('650px')`
    padding: 0;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  p {
    margin-top: 5vh;
    font-size: 1.25rem;
    text-align: justify;
  }

  span {
    color: #7159c1;
    margin: 3vh 0;
    font-size: 1.75rem;
    font-weight: bold;
  }

  small {
    margin-top: 10px;
  }
`;

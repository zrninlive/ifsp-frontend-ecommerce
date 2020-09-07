import styled from 'styled-components';
import media from 'styled-media-query';

export const Title = styled.h1`
  margin: 30px 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  color: #7159c1;

  position: relative;
/*
  ${media.greaterThan('650px')`

    &:before {
      content: '';
      border: 1px solid #7159c1;
      width: 30%;
    }

    &:after {
      content: '';
      border: 1px solid #7159c1;
      width: 30%;
    }

  `} */
`;

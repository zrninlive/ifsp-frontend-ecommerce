import styled from 'styled-components';
import media from 'styled-media-query';

export const DefaultTitle = styled.h1`
  margin: 30px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  color: #7159c1;

  position: relative;

  &:before {
    content: '';
    width: 100px;
    border: 1px solid #7159c1;
    width: 12%;

    ${media.greaterThan('650px')`
      width: 30%;
      margin-left: 20px;
    `}
  }

  &:after {
    content: '';
    width: 100px;
    border: 1px solid #7159c1;
    width: 12%;

    ${media.greaterThan('650px')`
      width: 30%;
      margin-left: 20px;
    `}
  }
`;

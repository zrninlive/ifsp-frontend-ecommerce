import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding: 30px;

  ${media.lessThan('650px')`
    padding: 0px;
  `}

  background: #fff;
  border-radius: 4px;
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;

    ${media.lessThan('650px')`
      &:first-child {
        display: none;
      }
    `}
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    ${media.lessThan('650px')`
      &:first-child {
        display: none;
      }
    `}
  }

  img {
    ${media.lessThan('650px')`
      display: none;
    `}

    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    display: block;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }

    button {
      ${media.lessThan('650px')`
        display: none;
      `}

      background: none;
      border: none;
      padding: 6px;
    }
  }
`;

export const Total = styled.div`
  margin: 20px 0;

  display: flex;
  align-items: baseline;
  justify-content: center;

  span {
    text-transform: uppercase;
    font-size: 1.25rem;
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
    color: #7159c1;
  }
`;

export const CartIsEmpty = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h1 {
    margin-bottom: 30px;
  }

  button {
    margin-top: 30px;
  }
`;

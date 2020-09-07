import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  ${media.lessThan('650px')`
    flex-direction: column;
    height: 10vh;

    a > img {
      display: none;
    }

  `}
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Account = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2;
  margin-right: 50px;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

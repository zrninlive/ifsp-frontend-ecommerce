import styled from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  ${media.lessThan('650px')`
    grid-template-columns: repeat(1, 1fr);
  `}

  ${media.between('650px', 'large')`
    grid-template-columns: repeat(2, 1fr);
  `}

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: #7159c1;

      img {
        align-self: center;
        max-width: 250px;
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0px 20px;
      }
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

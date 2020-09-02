import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header``;

export const Default = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  border-top: 4px inset #7159c1;
  border-bottom: 4px outset #7159c1;

  padding: 20px;

  a {
    padding: 0 20px;
    color: #fff;
    font-size: 1.25rem;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  ${media.lessThan('650px')`
    display: none;
  `}
`;

export const Mobile = styled.div``;

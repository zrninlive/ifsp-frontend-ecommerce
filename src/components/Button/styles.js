import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.button`
  min-width: 300px;

  ${media.lessThan('650px')`
      width: 100%;
  `}

  padding: 20px 30px;
  border: none;

  background: ${props => (props.background ? props.background : `#7159c1`)};

  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;

  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

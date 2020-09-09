import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.button`
  ${media.greaterThan('650px')`
      min-width: 250px;
  `}

  min-width: 250px;

  ${media.lessThan('650px')`
      min-width: 250px;
      width: 100%;
  `}

  padding: 20px 30px;
  border: none;

  background: ${props => (props.background ? props.background : `#7159c1`)};

  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

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

import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => (props.size ? `${props.size}%` : `100%`)};

  ${media.lessThan('650px')`
    width: 100%;
  `}

  & + div {
    margin-top: 10px;
  }

  label {
    font-size: 1.25rem;

    font-weight: bold;
    margin: 10px 5px;
    color: #fff;
  }

  input {
    font-size: 1.25rem;
    border: 1px solid #7159c1;
    border-radius: 2px;
    padding: 10px 20px;
    background: #262845;
    color: #fff;

    &:focus {
      border: 2px solid #7159c1;
    }
  }
`;

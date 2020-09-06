import styled from 'styled-components';
import media from 'styled-media-query';
import { darken } from 'polished';

export const Container = styled.button`
  /* width: 400px; */
  padding: 20px 30px;
  border: none;

  background: #7159c1;
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;

  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#7159c1')};
  }
`;

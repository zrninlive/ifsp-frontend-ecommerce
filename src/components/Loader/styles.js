import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff85;

  ${props =>
    props.loading
      ? css`
          display: none;
        `
      : ''}

  > div {
    position: absolute;
    right: 50%;
    top: 50%;
  }
`;

import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;

  ${media.lessThan('650px')`
    flex-direction: column;
    padding: 0;
  `}

  align-items: center;
`;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${media.greaterThan('650px')`
    width: 40%;
  `}

  button {
    margin: 50px auto 0px;
  }
`;

export const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  color: #fff;

  ${media.lessThan('650px')`
    padding-top: 40px;
    border-top: 1px dashed #7159c1;
    margin-top: 50px;
  `}

  ${media.greaterThan('650px')`
    width: 40%;
  `}

  p {
    margin: 40px 0;
  }
`;

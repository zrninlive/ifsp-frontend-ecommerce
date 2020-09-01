import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;

  img {
    margin: 40px auto;
    height: 3vh;
  }

  /* background: #7159c1; */
`;

export const Highlights = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 70%;
  margin-top: 50px;

  list-style: none;

  li {
    display: flex;
    align-items: center;

    background: #ffffff0d;
    color: #fff;
    padding: 20px;
    border-radius: 15px;

    svg {
      margin-right: 15px;
    }

    span {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;

export const CopyRight = styled.div`
  width: 100vw;

  background: #7159c161;
  margin-bottom: -15%;
  padding: 12px;

  p {
    text-align: center;
    font-size: 0.75rem;
    color: #bababa;
  }
`;

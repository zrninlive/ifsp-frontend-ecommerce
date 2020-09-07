import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.nav``;

export const Default = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  border-top: 2px solid #7159c1;
  border-bottom: 2px solid #7159c1;

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

export const Mobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #7159c1;
  width: 100vw;
  height: 8vh;
  z-index: 20;

  a > img {
    width: 65%;
    margin: 15px auto 0px 24px;
  }

  ${media.greaterThan('650px')`
    display: none;
  `}
`;

export const Burguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#7159c1' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const RightNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 19;

  h1 {
    margin: 5vh 0;
    color: #000;
    font-size: 1.75rem;
  }

  a {
    padding: 18px 10px;
    text-decoration: none;
    color: #b5b5b5;
    font-size: 1.25rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

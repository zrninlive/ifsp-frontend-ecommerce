import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Default, Mobile, Burguer, RightNav } from './styles';

import logo from '../../assets/images/logo.svg';

const MenuLinks = () => {
  return (
    <>
      <Link to="/products/skate">Skate</Link>
      <Link to="/products/casual">Casual</Link>
      <Link to="/products/running">Running</Link>
      <Link to="/products/chuteiras">Chuteiras</Link>
      <Link to="/products/chinelos">Chinelos</Link>
    </>
  );
};

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Default>
        <MenuLinks />
      </Default>

      <Mobile>
        <Link to="/">
          <img src={logo} alt="rocketshoes" />
        </Link>
        <Burguer open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burguer>
        <RightNav open={open}>
          <h1>Produtos</h1>
          <MenuLinks />
        </RightNav>
      </Mobile>
    </Container>
  );
}

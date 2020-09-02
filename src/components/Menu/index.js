import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Default, Mobile } from './styles';

export default function Menu() {
  return (
    <Container>
      <Default>
        <Link to="/products/skate">Skate</Link>
        <Link to="/products/casual">Casual</Link>
        <Link to="/products/running">Running</Link>
        <Link to="/products/chuteiras">Chuteiras</Link>
        <Link to="/products/chinelos">Chinelos</Link>
      </Default>
    </Container>
  );
}

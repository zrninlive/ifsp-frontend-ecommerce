import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <Link to="/products/skate">Skate</Link>
      <Link to="/">Casual</Link>
      <Link to="/">Running</Link>
      <Link to="/">Chuteiras</Link>
      <Link to="/">Chinelos</Link>
    </Container>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <Link to="/aopa">Aopa</Link>
    </Container>
  );
}

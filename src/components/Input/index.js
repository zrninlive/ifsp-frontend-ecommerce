import React from 'react';

import { Container } from './styles';

export default function Input({ name, label, size, ...props }) {
  return (
    <Container size={size}>
      <label>{label}</label>
      <input type="text" name={name} {...props} />
    </Container>
  );
}

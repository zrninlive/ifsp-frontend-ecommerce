import React from 'react';

import { Container } from './styles';

export default function Button({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

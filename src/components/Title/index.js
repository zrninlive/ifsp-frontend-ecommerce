import React from 'react';
import { Link } from 'react-router-dom';

import { DefaultTitle } from './styles';

export default function Title({ children }) {
  return <DefaultTitle>{children}</DefaultTitle>;
}

import React from 'react';
import { PacmanLoader } from 'react-spinners';

import { Container } from './styles';

import { useLayout } from '../../hooks';
export default function Loader() {
  const { setLoading, storeLayout } = useLayout();

  return (
    <Container loading={storeLayout.loading}>
      <div>
        <PacmanLoader size={50} color={'#7159c1'} loading={false} />
      </div>
    </Container>
  );
}

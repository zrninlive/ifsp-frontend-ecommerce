import React from 'react';

import { Container, LoginContainer } from './styles';

import { Title, Separator, Input, Button } from '../../components';

export default function Account() {
  return (
    <>
      <Title>Login</Title>
      <Container>
        <Input name="email" required="required" label="E-mail" size={45} />
        <Input
          name="password"
          required="required"
          type="password"
          label="Senha"
          size={45}
        />

        <Button>Entrar</Button>
      </Container>

      <Separator />
    </>
  );
}

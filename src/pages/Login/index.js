import React from 'react';

import { Container, LoginContainer, CreateAccountContainer } from './styles';

import { Title, Separator, Input, Button } from '../../components';

export default function Account() {
  return (
    <>
      <Title>Login</Title>
      <Container>
        <LoginContainer>
          <Input name="email" required="required" label="E-mail" />
          <Input
            name="password"
            required="required"
            type="password"
            label="Senha"
          />

          <Button>Entrar</Button>
        </LoginContainer>

        <CreateAccountContainer>
          <h1>Ainda não possui conta?</h1>

          <p>
            Não perca mais tempo, se cadastre e aproveite agora as ofertas da{' '}
            <strong>ROCKETSHOES</strong>
          </p>

          <Button>Criar conta</Button>
        </CreateAccountContainer>
      </Container>

      <Separator />
    </>
  );
}

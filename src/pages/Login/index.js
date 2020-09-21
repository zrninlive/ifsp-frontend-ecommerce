import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, LoginContainer, CreateAccountContainer } from './styles';

import api from '../../services/api';

import { Title, Separator, Input, Button } from '../../components';

import { useAuth } from '../../hooks/auth';

export default function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { storeAuth, setUser, setRedirect } = useAuth();

  useEffect(() => {
    if (Object.keys(storeAuth.user).length) {
      if (storeAuth.redirectTo) {
        setRedirect(null);
        return history.push(storeAuth.redirectTo);
      }

      return history.push('/account');
    }
  }, [storeAuth]);

  const handleLogin = useCallback(
    async e => {
      e.preventDefault();

      try {
        const response = await api.get('/customers/login', {
          params: {
            email,
            password,
          },
        });
        setUser(response.data);
      } catch (error) {
        toast.error('Usuário ou senha inválidos, tente novamente!');
      }
    },
    [email, password]
  );

  return (
    <>
      <Title>Login</Title>
      <Container>
        <LoginContainer>
          <Input
            name="email"
            required="required"
            label="E-mail"
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <Input
            name="password"
            required="required"
            type="password"
            label="Senha"
            onChange={e => setPassword(e.currentTarget.value)}
          />

          <Button onClick={handleLogin}>Entrar</Button>
        </LoginContainer>

        <CreateAccountContainer>
          <h1>Ainda não possui conta?</h1>

          <p>
            Não perca mais tempo, se cadastre e aproveite agora as ofertas da{' '}
            <strong>ROCKETSHOES</strong>
          </p>

          <Button onClick={() => history.push('/register')}>Criar conta</Button>
        </CreateAccountContainer>
      </Container>

      <Separator />
    </>
  );
}

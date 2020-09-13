import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

import { Title, Separator, Input, Button } from '../../components';

import { useAuth } from '../../hooks/auth';

export default function Register() {
  const history = useHistory();

  const { storeAuth } = useAuth();

  useEffect(() => {
    if (Object.keys(storeAuth.user).length) {
      return history.push('/account');
    }
  }, [history, storeAuth.user]);

  return (
    <>
      <Title>Cadastre-se</Title>

      <Container>
        <Input name="name" label="Nome" />

        <Input name="cpf" label="CPF" size={48} />

        <Input name="phone" label="Telefone" size={48} />

        <Input name="zipcode" label="Cep" size={15} />

        <Input name="address" label="Endereço" size={60} />

        <Input name="number" label="Número" size={10} />

        <Input name="number" label="Cidade" size={50} />

        <Input name="number" label="Estado" size={45} />

        <Button>Cadastrar</Button>

        <Separator />
      </Container>
    </>
  );
}

import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

import { Title, Separator, Input, Button } from '../../components';

import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';

export default function Register() {
  const history = useHistory();

  const [customer, setCustomer] = useState({});

  const { storeAuth, setUser } = useAuth();

  useEffect(() => {
    if (Object.keys(storeAuth.user).length) {
      return history.push('/login');
    }
  }, [history, storeAuth.user]);

  const handleOnChangeCustomer = useCallback(
    e => {
      setCustomer({
        ...customer,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [customer]
  );

  const handleSubmitCustomer = useCallback(
    async e => {
      e.preventDefault();

      try {
        await api.get('/customers/insert', {
          params: {
            ...customer,
          },
        });

        setUser(customer);

        if (storeAuth.redirectTo) {
          toast.success(
            'Cadastro efetuado com sucesso, agora é so finalizar seu pedido'
          );
          return;
        }

        // toast.success('Cadastro efetuado com sucesso');
      } catch (error) {
        toast.error('Falha ao se cadastrar, tente novamente.');
      }
    },
    [customer]
  );

  return (
    <>
      <Title>Cadastre-se</Title>

      <Container>
        <Input
          name="name"
          label="Nome"
          onChange={handleOnChangeCustomer}
          value={customer.name}
        />

        <Input
          name="email"
          label="E-mail"
          size={48}
          value={customer.email}
          onChange={handleOnChangeCustomer}
        />

        <Input
          name="password"
          type="password"
          label="Senha"
          size={48}
          value={customer.password}
          onChange={handleOnChangeCustomer}
        />

        <Input
          name="cpf"
          label="CPF"
          size={45}
          value={customer.cpf}
          onChange={handleOnChangeCustomer}
        />

        <Input
          name="phone"
          label="Telefone"
          size={45}
          value={customer.phone}
          onChange={handleOnChangeCustomer}
        />

        <Input
          name="zipcode"
          label="Cep"
          value={customer.zipcode}
          onChange={handleOnChangeCustomer}
          size={20}
        />

        <Input
          name="street"
          label="Endereço"
          value={customer.street}
          onChange={handleOnChangeCustomer}
          size={60}
        />

        <Input
          name="number"
          label="Número"
          value={customer.number}
          onChange={handleOnChangeCustomer}
          size={10}
        />

        <Input
          name="city"
          label="Cidade"
          value={customer.city}
          onChange={handleOnChangeCustomer}
          size={50}
        />

        <Input
          name="state"
          label="Estado"
          value={customer.state}
          onChange={handleOnChangeCustomer}
          size={45}
        />

        <Button onClick={handleSubmitCustomer}>Cadastrar</Button>

        <Separator />
      </Container>
    </>
  );
}

import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { Container, Orders, OrderIsEmpty } from './styles';

import api from '../../services/api';

import { Title, Separator, Input, Button } from '../../components';

import { useAuth } from '../../hooks/auth';

import { formatPrice, formatDate } from '../../util/format';

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};

export default function Account() {
  const { storeAuth, clearStore, setUser } = useAuth();

  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState({});

  const history = useHistory();

  useEffect(() => {
    if (!Object.keys(storeAuth.user).length) {
      return history.push('/login');
    }

    setCustomer(storeAuth.user);

    async function loadOrders() {
      const { data } = await api.get(`/orders?cpf=${storeAuth.user.cpf}`);

      setOrders(data);
    }

    loadOrders();
  }, [storeAuth.user]);

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
        await api.get('/customers/update', {
          params: {
            ...customer,
          },
        });

        setUser(customer);

        toast.success('Cadastro atualizado com sucesso');
      } catch (error) {
        toast.error('Falha ao se cadastrar, tente novamente.');
      }

      console.log(customer);
    },
    [customer]
  );

  return (
    <>
      <Title>Meus pedidos</Title>

      <Orders>
        {Object.keys(orders).length ? (
          <Accordion allowMultipleExpanded={true}>
            {orders.map(order => (
              <AccordionItem key={order.created_at}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p>Pedido # {formatDate(order.created_at)} </p>
                    <span>{formatPrice(order.total)}</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <table>
                    <thead>
                      <th width="50%">Produto</th>
                      <th width="15%">Qtd</th>
                      <th width="35%">Valor</th>
                    </thead>
                    <tbody>
                      {order.products.map(product => (
                        <tr>
                          <td>{product.title}</td>
                          <td>{product.quantity}</td>
                          <td>{formatPrice(product.total)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <OrderIsEmpty>
            <h1>Você ainda não possui nenhum pedido</h1>
          </OrderIsEmpty>
        )}
      </Orders>

      <Title>Meus dados</Title>
      {customer && (
        <Container>
          <Input
            name="id"
            type="hidden"
            value={customer.id}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="name"
            label="Nome"
            value={customer.name}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="cpf"
            label="CPF"
            size={30}
            value={customer.cpf}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="email"
            label="E-mail"
            size={30}
            value={customer.email}
            onChange={handleOnChangeCustomer}
            readOnly
          />
          <Input
            name="phone"
            label="Telefone"
            size={30}
            value={customer.phone}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="zipcode"
            label="Cep"
            size={15}
            value={customer.zipcode}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="street"
            label="Endereço"
            size={60}
            value={customer.street}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="number"
            label="Número"
            size={10}
            value={customer.number}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="city"
            label="Cidade"
            size={50}
            value={customer.city}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="state"
            label="Estado"
            size={45}
            value={customer.state}
            onChange={handleOnChangeCustomer}
          />

          <Button onClick={handleSubmitCustomer}>Atualizar</Button>

          <Button onClick={clearStore} type="button" background="#d04f4f99">
            Logout
          </Button>

          <Separator />
        </Container>
      )}
    </>
  );
}

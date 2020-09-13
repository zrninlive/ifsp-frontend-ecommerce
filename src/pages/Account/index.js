import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
  const { storeAuth, clearStore } = useAuth();

  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState({});
  const [address, setAddress] = useState({});

  const history = useHistory();

  useEffect(() => {
    if (!Object.keys(storeAuth.user).length) {
      return history.push('/login');
    }

    setCustomer(storeAuth.user);
    setAddress(storeAuth.user.address);

    async function loadOrders() {
      const { data } = await api.get(
        `/orders?customer.id=${storeAuth.user.id}`
      );

      setOrders(data);
    }

    loadOrders();
  }, [storeAuth.user]);

  const handleOnChangeCustomer = useCallback(e => {
    console.log(customer);
    setCustomer({
      ...customer,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }, []);

  const handleOnChangeAddress = useCallback(e => {
    setCustomer({
      ...address,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }, []);

  const handleSubmitCustomer = useCallback(
    async e => {
      e.preventDefault();
      console.log(customer);
    },
    [customer]
  );

  return (
    <>
      <Title>Meus pedidos</Title>

      <Orders>
        {orders ? (
          <Accordion allowMultipleExpanded={true}>
            {orders.map(order => (
              <AccordionItem key={order.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p>
                      Pedido #{order.id.pad(3)} - {formatDate(order.created_at)}{' '}
                    </p>
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
                          <td>{product.name}</td>
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
      {customer && address && (
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
            size={48}
            value={customer.cpf}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="phone"
            label="Telefone"
            size={48}
            value={customer.phone}
            onChange={handleOnChangeCustomer}
          />
          <Input
            name="address.zipcode"
            label="Cep"
            size={15}
            value={address.zipcode}
            onChange={handleOnChangeAddress}
          />
          <Input
            name="address.street"
            label="Endereço"
            size={60}
            value={address.street}
            onChange={handleOnChangeAddress}
          />
          <Input
            name="address.number"
            label="Número"
            size={10}
            value={address.number}
            onChange={handleOnChangeAddress}
          />
          <Input
            name="address.city"
            label="Cidade"
            size={50}
            value={address.city}
            onChange={handleOnChangeAddress}
          />
          <Input
            name="address.state"
            label="Estado"
            size={45}
            value={address.state}
            onChange={handleOnChangeAddress}
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

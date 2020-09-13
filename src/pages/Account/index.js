import React, { useEffect, useState } from 'react';
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
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const { storeAuth, clearStore } = useAuth();

  useEffect(() => {
    if (!Object.keys(storeAuth.user).length) {
      return history.push('/login');
    }

    async function loadOrders() {
      const { data } = await api.get(
        `/orders?customer.id=${storeAuth.user.id}`
      );

      setOrders(data);
    }

    loadOrders();
  }, [history, storeAuth.user]);

  return (
    <>
      <Title>Meus pedidos</Title>

      <Orders>
        {orders ? (
          <Accordion allowMultipleExpanded={true}>
            {console.log(orders)}
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

      <Container>
        <Input name="name" label="Nome" />

        <Input name="cpf" label="CPF" size={48} />

        <Input name="phone" label="Telefone" size={48} />

        <Input name="zipcode" label="Cep" size={15} />

        <Input name="address" label="Endereço" size={60} />

        <Input name="number" label="Número" size={10} />

        <Input name="number" label="Cidade" size={50} />

        <Input name="number" label="Estado" size={45} />

        <Button>Atualizar</Button>

        <Button onClick={clearStore} type="button" background="#d04f4f99">
          Logout
        </Button>

        <Separator />
      </Container>
    </>
  );
}

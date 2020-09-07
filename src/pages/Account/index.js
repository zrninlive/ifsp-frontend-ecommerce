import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { Container, Orders } from './styles';

import { Title, Separator, Input, Button } from '../../components';

export default function Account() {
  return (
    <>
      <Title>Meus pedidos</Title>

      <Orders>
        <Accordion allowMultipleExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p>Pedido #0001 - 01/09/2020 </p>
                <span>R$999,00</span>
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
                  <tr>
                    <td>Tenis Nike Air Max 90 - Preto Número 547 #102912</td>
                    <td>1</td>
                    <td>R$400,00</td>
                  </tr>
                </tbody>
              </table>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p>Pedido #0001 - 02/09/2020 </p>
                <span>R$300,00</span>
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
                  <tr>
                    <td>Tenis Nike Air Max 90 - Preto Número 547 #102912</td>
                    <td>1</td>
                    <td>R$400,00</td>
                  </tr>
                </tbody>
              </table>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </Orders>

      <Separator />

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

        <Button type="button" background="#d04f4f99">
          Logout
        </Button>

        <Separator />
      </Container>
    </>
  );
}

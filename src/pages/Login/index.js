import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { Container, LoginContainer } from './styles';

import { Title, Separator, Input, Button } from '../../components';

export default function Account() {
  return (
    <>
      <Title>Login</Title>
      <Container>
        <Input name="email" label="E-mail" size={45} />
        <Input name="password" label="Senha" size={45} />

        <Button>Entrar</Button>
      </Container>

      <Separator />
    </>
  );
}

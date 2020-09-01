import React from 'react';
import { Link } from 'react-router-dom';

import { MdLocalShipping, MdAccessTime, MdCreditCard } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

import { Container, Highlights, CopyRight } from './styles';

export default function Footer() {
  return (
    <Container>
      <Highlights>
        <li>
          <MdLocalShipping size={36} color="#FFF" />
          <div>
            <span>Frete Grátis</span>
            <p>Em produtos selecionados</p>
            <small>confira as regras</small>
          </div>
        </li>

        <li>
          <MdAccessTime size={36} color="#FFF" />
          <div>
            <span>Entrega Expressa</span>
            <p>A partir de 2 dias úteis</p>
            <small>confira as regras</small>
          </div>
        </li>

        <li>
          <MdCreditCard size={36} color="#FFF" />
          <div>
            <span>Em até 10x sem juros</span>
            <p>no cartão de crédito</p>
            <small>
              ou <strong>10%</strong> de desconto à vista
            </small>
          </div>
        </li>
      </Highlights>

      <img src={logo} alt="rocketshoes" />

      <CopyRight>
        <p>© Todos os direitos reservados - 2020</p>
      </CopyRight>
    </Container>
  );
}

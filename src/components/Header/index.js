import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket, MdPerson } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

import { Container, Actions, Cart, Account } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketshoes" />
      </Link>

      <Actions>
        <Account to="/account">
          <div>
            <strong>Minha conta</strong>
          </div>
          <MdPerson size={36} color="#FFF" />
        </Account>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} items</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Actions>
    </Container>
  );
}

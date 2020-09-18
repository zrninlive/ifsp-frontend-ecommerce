import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket, MdPerson } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

import { Container, Actions, Cart, Account } from './styles';

import { useAuth } from '../../hooks/auth';
import { useProducts } from '../../hooks/products';

export default function Header() {
  const { storeProducts } = useProducts();

  const cartSize = storeProducts.cart.length;

  const { storeAuth } = useAuth();

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketshoes" />
      </Link>

      <Actions>
        {Object.keys(storeAuth.user).length ? (
          <Account to="/account">
            <div>
              <strong>Minha conta</strong>
            </div>
            <MdPerson size={36} color="#FFF" />
          </Account>
        ) : (
          <Account to="/login">
            <div>
              <strong>Entrar / Cadastrar</strong>
            </div>
            <MdPerson size={36} color="#FFF" />
          </Account>
        )}

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

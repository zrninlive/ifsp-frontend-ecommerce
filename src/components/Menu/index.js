import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Default, Mobile, Burguer, RightNav } from './styles';

import logo from '../../assets/images/logo.svg';

import api from '../../services/api';

import { useProducts } from '../../hooks/products';

const MenuLinks = () => {
  const { storeProducts, setCategories } = useProducts();

  useEffect(() => {
    if (storeProducts.categories) {
      return;
    }

    async function loadCategories() {
      const response = await api.get('/categories');
      setCategories(response.data);
    }

    loadCategories();
  }, [setCategories, storeProducts.categories]);

  return (
    <>
      {storeProducts.categories.map(category => (
        <Link key={category.id} to={`/products/category/${category.id}`}>
          {category.title}
        </Link>
      ))}
    </>
  );
};

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Default>
        <MenuLinks />
      </Default>

      <Mobile>
        <Link to="/">
          <img src={logo} alt="rocketshoes" />
        </Link>
        <Burguer open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burguer>
        <RightNav open={open}>
          <h1>Produtos</h1>
          <MenuLinks />
        </RightNav>
      </Mobile>
    </Container>
  );
}

import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import { Container } from './styles';

export default function ProductList({ products }) {
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  const dispatch = useDispatch();

  return (
    <Container>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </Container>
  );
}

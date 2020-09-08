import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total, CartIsEmpty } from './styles';

import { Button, Separator, Title } from '../../components';

import * as CartAction from '../../store/modules/cart/actions';

import { useAuth } from '../../hooks/auth';

export default function Cart() {
  const history = useHistory();

  const { storeAuth, setRedirect } = useAuth();

  const handleCheckout = useCallback(() => {
    const { user } = storeAuth;

    if (!Object.keys(user).length) {
      toast.error(
        'Para finalizar o seu pedido é necessário você se realizar o login ou se cadastrar'
      );
      return history.push('/login');
    }

    setRedirect('/cart');

    alert('COMPROU!');
  }, [storeAuth]);

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <>
      <Title>Meu carrinho</Title>
      <Container>
        {cart.length ? (
          <>
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th width="40%">PRODUTO</th>
                  <th width="15%">QTD</th>
                  <th width="20%">SUBTOTAL</th>
                  <th width="15%" />
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.title} />
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() => decrement(product)}
                        >
                          <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button
                          type="button"
                          onClick={() => increment(product)}
                        >
                          <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subTotal}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(CartAction.removeFromCart(product.id))
                        }
                      >
                        <MdDelete size={20} color="#7159c1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>

            <footer>
              <Total>
                <span>Valor Total</span>
                <strong>{total}</strong>
              </Total>
            </footer>

            <Button type="button" onClick={handleCheckout}>
              Finalizar pedido
            </Button>
          </>
        ) : (
          <CartIsEmpty>
            <h1>Carrinho vazio</h1>
            <p>Você ainda não adicionou nenhum produto em seu carrinho.</p>

            <Button onClick={() => history.push('/')}>
              Voltar para a página inicial
            </Button>
          </CartIsEmpty>
        )}
      </Container>

      <Separator />
    </>
  );
}

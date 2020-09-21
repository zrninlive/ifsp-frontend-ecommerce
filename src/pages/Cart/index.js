import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total, CartIsEmpty } from './styles';

import { Button, Separator, Title, ProductList } from '../../components';

import { useAuth, useProducts } from '../../hooks';

export default function Cart() {
  const history = useHistory();

  const { storeAuth, setRedirect } = useAuth();
  const { storeProducts, removeFromCart, addToCart } = useProducts();

  const { cart: productsOnCart } = storeProducts;

  const handleCheckout = useCallback(async () => {
    const { user } = storeAuth;

    if (!Object.keys(user).length) {
      toast.error(
        'Para finalizar o seu pedido é necessário você se realizar o login ou se cadastrar'
      );

      setRedirect('/cart');
      return history.push('/login');
    }

    const productsOrder = productsOnCart.map(product => ({
      id: product.id,
      quantity: product.quantity,
    }));

    const productsArray = [];

    productsOrder.forEach((value, key) => {
      productsArray[`products-${key}-id`] = value.id;
      productsArray[`products-${key}-quantity`] = value.quantity;
    });

    console.log(productsArray);

    const payload = {
      customer_cpf: user.cpf,
      total_products: productsOrder.length,
      ...productsArray,
    };

    await api.get('/orders/insert', {
      params: {
        ...payload,
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    });
  }, [storeAuth]);

  const cart = productsOnCart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.quantity),
  }));

  const total = formatPrice(
    productsOnCart.reduce((totalSum, product) => {
      return totalSum + product.price * product.quantity;
    }, 0)
  );

  function increment(product) {
    addToCart({ product_id: product.id, quantity: product.quantity + 1 });
  }

  function decrement(product) {
    addToCart({ product_id: product.id, quantity: product.quantity - 1 });
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
                        <input
                          type="number"
                          readOnly
                          value={product.quantity}
                        />
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
                        onClick={() => removeFromCart(product.id)}
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

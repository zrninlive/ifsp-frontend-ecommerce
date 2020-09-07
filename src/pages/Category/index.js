import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { Title, ProductList, Separator } from '../../components';

import { useProducts } from '../../hooks/products';

export default function Category() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const { category_id } = useParams();

  const { storeProducts } = useProducts();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const categorySelected = storeProducts.categories.find(
        category => category.id === category_id
      );

      setCategory(categorySelected);

      const response = await api.get(`products?category_id=${category_id}`);

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, [category_id]);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <>
      <Title>{category.title}</Title>
      <ProductList products={products} />
      <Separator />
    </>
  );
}

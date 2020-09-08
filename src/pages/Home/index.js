import React, { useState, useEffect } from 'react';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList, Title, Separator } from '../../components';

import { useProducts } from '../../hooks/products';

Array.prototype.shuffle = function() {
  var i = this.length,
    j,
    temp;
  if (i === 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

export default function Home() {
  const [productsOutlet, setProductsOutlet] = useState([]);
  const [highlights, setHighlights] = useState([]);

  const { setProducts } = useProducts();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const products = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(products);

      setHighlights(products.filter(product => !!product.highlight).shuffle());

      setProductsOutlet(
        products.filter(product => !product.highlight).shuffle()
      );
    }

    loadProducts();
  }, [setProducts]);

  return (
    <>
      <Title>Lançamentos</Title>
      <ProductList products={highlights} />
      <Title>Super Outlet</Title>
      <ProductList products={productsOutlet} />
      <Separator />
    </>
  );
}

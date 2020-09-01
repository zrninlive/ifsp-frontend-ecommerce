import React, { useState, useEffect } from 'react';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from '../../components';

import { Title, Separator } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const products = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      console.log(products);

      setHighlights(products.filter(product => !!product.highlight));
      setProducts(products.filter(product => !product.highlight));
    }

    loadProducts();
  }, []);

  return (
    <>
      <Title>Lançamentos</Title>
      <ProductList products={highlights} />
      <Separator />
      <Title>Mais vendidos</Title>
      <ProductList products={products} />
    </>
  );
}

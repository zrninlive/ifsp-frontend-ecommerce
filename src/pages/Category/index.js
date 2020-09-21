import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { Title, ProductList, Separator } from '../../components';

import { useProducts } from '../../hooks/products';

export default function Category() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const { category_id } = useParams();

  const { storeProducts } = useProducts();

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

  return (
    <>
      <Title>{category.title}</Title>
      <ProductList products={products} />
      <Separator />
    </>
  );
}

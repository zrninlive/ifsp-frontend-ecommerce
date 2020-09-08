import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../util/format';

import { Button, Separator, ProductList, Title } from '../../components';

import { ProductDetail, Picture, Info } from './styles';

import { useProducts } from '../../hooks/products';

export default function Product() {
  const [productsRelationed, setProductsRelationed] = useState([]);
  const [product, setProduct] = useState([]);

  const { storeProducts } = useProducts();

  const { product_id } = useParams();
  console.log('PARAM PRODUCT ID', product_id);

  useEffect(() => {
    async function getProduct() {
      const { products } = storeProducts;

      const [productDetail] = products.filter(
        product => product.id === +product_id
      );

      const productsAssociateds = products.filter(
        product =>
          product.category_id === productDetail.category_id &&
          product.id !== productDetail.id
      );

      if (!productDetail) {
      }

      setProduct(productDetail);

      setProductsRelationed(productsAssociateds);
    }

    getProduct();
  }, [product_id, storeProducts]);

  return (
    <>
      <ProductDetail>
        <Picture>
          <img src={product.image} alt={product.title} />
        </Picture>
        <Info>
          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <span>{formatPrice(product.price)}</span>

          <Button onClick={() => {}}>Adicionar ao carrinho</Button>
        </Info>
      </ProductDetail>

      {productsRelationed.length && (
        <>
          <Title>Produtos Relacionados</Title>
          <ProductList products={productsRelationed} />
        </>
      )}

      <Separator />
    </>
  );
}

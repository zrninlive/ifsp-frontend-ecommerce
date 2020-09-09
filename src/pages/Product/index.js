import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../util/format';

import { Button, Separator, ProductList, Title } from '../../components';

import { ProductDetail, Picture, Info } from './styles';

import { useProducts } from '../../hooks/products';
import { useCallback } from 'react';

export default function Product() {
  const { product_id } = useParams();

  const [productsRelationed, setProductsRelationed] = useState([]);
  const [product, setProduct] = useState([]);

  const { storeProducts, addToCart } = useProducts();

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

  const handleAddCart = useCallback(
    product => {
      console.log(product);
    },
    [addToCart]
  );

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

          {product.quantity ? (
            <>
              <Button onClick={() => handleAddCart(product)}>
                Adicionar ao carrinho
              </Button>

              <small>
                Restam <b>{product.quantity}</b> unidade em estoque
              </small>
            </>
          ) : (
            <Button disabled="disabled" background="#c1c1c1">
              Produto Indisponível
            </Button>
          )}
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

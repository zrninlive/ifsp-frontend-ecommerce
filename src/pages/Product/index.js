import React, { useState, useEffect } from 'react';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { Button, Separator, ProductList, Title } from '../../components';

import { ProductDetail, Picture, Info } from './styles';

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const productsRelationed = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(productsRelationed.filter(product => !!product.highlight));
    }

    loadProducts();
  }, []);

  return (
    <>
      <ProductDetail>
        <Picture>
          <img src="https://static.netshoes.com.br/produtos/chinelo-dedo-reserva-listras-masculino/26/B67-3792-026/B67-3792-026_zoom2.jpg" />
        </Picture>
        <Info>
          <h1>CAMISETA NEW ERA NEW ENGLAND PATRIOTS AZUL-M</h1>

          <p>
            Não para! Para os praticantes da corrida o Tênis Under Armour
            Charged Carbon é a companhia perfeita para o treino diário. Ideal
            para corridas na rua ou na esteira, esse tênis de corrida possui
            tecnologia que oferece ótimo amortecimento com proteção ao impacto e
            com resposta rápida. Fabricado em malha, o tênis running da Under
            Armour possui solado em borracha, oferecendo maior segurança na
            passada.
          </p>

          <span>R$ 189,99</span>

          <Button>Adicionar ao carrinho</Button>
        </Info>
      </ProductDetail>

      <Separator />
      <Title>Produtos Relacionados</Title>

      <ProductList products={products} />

      <Separator />
    </>
  );
}

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatDate = isoDate => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return new Date(isoDate).toLocaleDateString('pt-br', options);
};

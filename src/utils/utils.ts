export const formatPrice = (price?: number): string | null => {
  if (price === undefined) {
    return null;
  }
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr`;
};

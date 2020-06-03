import { formatPrice } from 'src/utils/utils';

test('format price with correct spacing and currency', () => {
  expect(formatPrice()).toBe(null);
  expect(formatPrice(1000000)).toBe('1 000 000 kr');
  expect(formatPrice(123456)).toBe('123 456 kr');
  expect(formatPrice(0)).toBe('0 kr');
});

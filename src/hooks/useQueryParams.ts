import { useLocation } from 'react-router-dom';

export const useQueryParams = (...query: string[]): Record<string, string> => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return query.reduce(
    (acc, value) => ({ ...acc, [value]: params.get(value) }),
    {},
  );
};

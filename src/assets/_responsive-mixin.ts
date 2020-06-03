import { css } from 'styled-components';

export const breakpoints = {
  xsmall: '480px',
  small: '768px',
  medium: '1024px',
  large: '1280px',
  xlarge: '1920px',
};

export const getMediaBreakpoints = () => {
  const mediaquery = {} as Record<
    keyof typeof breakpoints,
    (l: TemplateStringsArray, ...args: any[]) => string
  >;
  Object.keys(breakpoints).forEach(breakpoint => {
    mediaquery[breakpoint] = (
      literals: TemplateStringsArray,
      ...args: any[]
    ) => css`
      @media (max-width: ${breakpoints[breakpoint]}) {
        ${css(literals, ...args)};
      }
    `;
  });
  return mediaquery;
};

export const media = getMediaBreakpoints();

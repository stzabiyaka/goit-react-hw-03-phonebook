import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.borderMiddleColor};

  transition: color, background-color, box-shadow 250ms ease-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textLightColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-color: transparent;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentColor};
  }
`;

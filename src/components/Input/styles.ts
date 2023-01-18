import styled, { css } from 'styled-components';

export const InputField = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 2.625rem;
    padding: 0.75rem;
    background-color: ${theme.colors.inputColor};
    border-radius: 4px;
    border: 1px solid ${theme.colors.buttonColor};
  `}
`
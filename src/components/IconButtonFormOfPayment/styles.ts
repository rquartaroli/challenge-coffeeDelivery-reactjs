import styled, { css } from 'styled-components';

type ButtonStyleConfirmProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected: boolean,
}

export const Container = styled.button<ButtonStyleConfirmProps>`
  ${({ theme, isSelected = false }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    transition: 0.2s;

    ${isSelected
    ?
      css`
        background-color: ${theme.colors.purpleLight};
        border-color: ${theme.colors.purple};
      `
    :
      css`
        background-color: ${theme.colors.buttonColor};
        border-color: transparent;
      `
    }    

    &:hover {
      background-color: ${theme.colors.hoverColor};
    }

    &:focus {
      background-color: ${theme.colors.purpleLight};
      border-color: ${theme.colors.purple};
    }

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 0.75rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
      margin-left: 0.75rem;
      text-transform: uppercase;
    }
  `}
`
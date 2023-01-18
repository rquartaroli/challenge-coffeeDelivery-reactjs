import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    background-color: ${theme.colors.yellow};
    border-radius: 6px;
    border: 0;
    transition: 0.2s;

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 0.875rem;
      font-weight: 700;
      color: ${theme.colors.white};
      line-height: 1.4rem;
      text-transform: uppercase;
    }

    &:hover {
      background-color: ${theme.colors.yellowDark};
    }
  `}
`
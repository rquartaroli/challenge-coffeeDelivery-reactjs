import styled, { css } from 'styled-components';

export const Container = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;

    a {
      border-radius: 6px;
    }

    a:first-child {
      margin-right: 0.75rem;
    }
  }

  @media (max-width: 1080px) {
    padding: 2rem 1rem;
  }
`

const WrapperButtonNav = styled.div`
  height: 2.375rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const WrapperLocation = styled(WrapperButtonNav)`
  ${({ theme }) => css`
    background-color: ${theme.colors.purpleLight};
  `}
`

export const TextLocation = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.roboto};
    font-size: 0.875rem;
    font-weight: 400;
    color: ${theme.colors.purpleDark};
    margin-left: 0.25rem;
  `}
`

export const WrapperCart = styled(WrapperButtonNav)`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellowLight};
  `}
`

export const AmountItensInCart = styled.div`
  ${({ theme }) => css`
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.yellowDark};
    border-radius: 2.5rem;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    span {
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${theme.fonts.roboto};
      font-size: 0.75rem;
      font-weight: 700;
      color: ${theme.colors.white};
    }
  `}
`
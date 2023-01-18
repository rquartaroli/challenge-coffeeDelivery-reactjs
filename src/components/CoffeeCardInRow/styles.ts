import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const ContentColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`

export const ContentRowText = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.subtitleColor};
      line-height: 1.3rem;
    }

    strong {
      font-family: ${theme.fonts.roboto};
      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.subtitleColor};
      line-height: 1.3rem;
    }
  `}
`

export const ContentRowButtonsInteraction = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`

export const RowButtonAmount = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.buttonColor};
    border-radius: 6px;

    button {
      width: 1.5rem;
      height: 2rem;
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.purple};
      background-color: ${theme.colors.buttonColor};
      border: 0;
      border-radius: 6px 0 0 6px;
      transition: 0.2s;

      &:hover {
        color: ${theme.colors.purpleDark};
      }
    } 

    button:last-child {
      border-radius: 0 6px 6px 0;
    }
    
    span {
      width: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${theme.fonts.roboto};
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.titleColor};
    }
  `}
`

export const ButtonRemove = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: ${theme.colors.buttonColor};
    border-radius: 6px;
    border: 0;
    margin-left: 0.5rem;
    transition: 0.2s;

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 0.75rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
      text-transform: uppercase;
      margin-left: 0.25rem;
    }

    &:hover {
      background-color: ${theme.colors.hoverColor};
    }
  `}
`

export const HR = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    border: 0.5px solid ${theme.colors.buttonColor};
    margin: 1.5rem 0;
    align-self: stretch;
  `}
`
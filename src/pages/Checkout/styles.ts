import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  width: 70rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }
`

export const TitleForm = styled.strong`
  ${({theme}) => css`
    font-family: '${theme.fonts.baloo2}';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${theme.colors.subtitleColor};
    margin-top: 2.5rem;
    margin-bottom: 0.9375rem;
  `}
`

export const FormContent = styled.div`
  width: 40rem;
  height: 39.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const Form = styled.div`
  ${({theme}) => css`
    width: 40rem;
    height: 23.25rem;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    margin-bottom: 0.75rem;
    background-color: ${theme.colors.cardColor};
    border-radius: 6px;
    align-self: stretch;

    @media (max-width: 720px) {
      width: 100%;
    }

    div {
      display: flex;

      div {
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;

        span {
          font-family: ${theme.fonts.roboto};
          font-size: 1rem;
          font-weight: 400;
          color: ${theme.colors.subtitleColor};
          line-height: 1.3rem;
        }

        p {
          font-family: ${theme.fonts.roboto};
          font-size: 0.875rem;
          font-weight: 400;
          color: ${theme.colors.textColor};
        }
      }
    }
  `}
`

export const WrapperFormFields = styled.form`
  width: 35rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const WrapperCep = styled.div`
  width: 35.73%;
  margin-bottom: 1rem;
`

export const WrapperStreet = styled.div`
  margin-bottom: 1rem;
`

export const RowNumberAndComplement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const WrapperNumber = styled.div`
  width: 35.73%;
  margin-left: 0 !important;
`

export const WrapperComplement = styled.div`
  width: 62.14%;
  display: flex;
  flex-direction: row !important;

  #complement:focus + div {
    outline: 0;
    box-shadow: 2px 0 0 2px ${({ theme }) => theme.colors.yellowDark}, -2px 0 0 2px transparent;
  }
`

export const OptionalLabel = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    margin: 0 !important;
    background-color: ${theme.colors.inputColor};
    border-radius: 0 4px 4px 0;
    border: 1px solid ${theme.colors.buttonColor};
    border-left: 0;

    label {
      font-family: ${theme.fonts.roboto};
      font-style: italic;
      font-weight: 400;
      font-size: 0.75rem;
      color: ${theme.colors.labelColor};
    }
  `}
`

export const RowCity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperDistrict = styled.div`
  width: 35.73%;
  margin-left: 0 !important;
`

export const WrapperCity = styled.div`
  width: 49.28%;
`

export const WrapperState = styled.div`
  width: 10.72%;
`

export const FormOfPayment = styled.div`
  ${({theme}) => css`
    width: 40rem;
    height: 12.9375rem;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: ${theme.colors.cardColor};
    border-radius: 6px;
    align-self: stretch;

    @media (max-width: 720px) {
      width: 100%;
    }

    div {
      display: flex;

      div {
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;

        span {
          font-family: ${theme.fonts.roboto};
          font-size: 1rem;
          font-weight: 400;
          color: ${theme.colors.subtitleColor};
          line-height: 1.3rem;
        }

        p {
          font-family: ${theme.fonts.roboto};
          font-size: 0.875rem;
          font-weight: 400;
          color: ${theme.colors.textColor};
        }
      }
    }
  `}
`

export const WrapperFormOfPayments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.75rem;
  margin-top: 2rem;
`

export const FormAmountCoffee = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
`

export const WrapperAmountCoffee = styled.div`
  ${({theme}) => css`
    width: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    background-color: ${theme.colors.cardColor};
    border-radius: 6px 44px;
  `}
`

export const WrapperRowTotal = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 0.875rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
      line-height: 1.1375rem;
    }

    strong {
      font-family: ${theme.fonts.roboto};
      font-size: 1.25rem;
      font-weight: 700;
      color: ${theme.colors.subtitleColor};
      line-height: 1.625rem;
    }
  `}
`

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.75rem;
`

export const MessageEmptyCart = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.75rem;

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 0.875rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
      line-height: 1.1375rem;
      text-align: center;
    }

    strong {
      font-family: ${theme.fonts.roboto};
      font-size: 1.25rem;
      font-weight: 700;
      color: ${theme.colors.subtitleColor};
      line-height: 1.625rem;
      margin-bottom: 0.75rem;
    }
  `}
`
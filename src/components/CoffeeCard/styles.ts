import styled, { css } from 'styled-components';

export const ContainerCard = styled.div`
 ${({theme}) => css`
    width: 16rem;
    height: 19.375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.cardColor};
    border-radius: 6px 36px;
    padding: 0 1.25rem;

    strong {
      font-family: '${theme.fonts.baloo2}';
      font-size: 1.25rem;
      font-weight: 700;
      color: ${theme.colors.subtitleColor};
      line-height: 1.625rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    p {
      font-family: ${theme.fonts.roboto};
      font-size: 0.875rem;
      font-weight: 400;
      color: ${theme.colors.labelColor};
      line-height: 1.1375rem;
      text-align: center;
      margin-bottom: 2rem;
    }
 `}
`

export const TagsCoffee = styled.div`
  ${({theme}) => css`
    display: flex;
    
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.yellowLight};
      margin: 0.75rem 0.1rem 1.25rem 0;
      padding: 4px 8px;
      border-radius: 999px;

      span {
        font-family: ${theme.fonts.roboto};
        font-size: 0.625rem;
        font-weight: 700;
        color: ${theme.colors.yellowDark};
        text-transform: uppercase;
      }
    }
    div:last-child {
      margin-right: 0;
    }
  `}
`

export const RowDataCart = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    div {
      display: flex;
      justify-content: center;
      align-items: flex-end;

      span {
        font-family: ${theme.fonts.roboto};
        font-size: 0.875rem;
        font-weight: 400;
        color: ${theme.colors.textColor};
        line-height: 1.1375rem;
      }

      strong {
        font-family: '${theme.fonts.baloo2}';
        font-size: 1.5rem;
        font-weight: 800;
        color: ${theme.colors.textColor};
        line-height: 1.45rem;
        margin: 0;
      }

      button {
        width: 2.375rem;
        height: 2.375rem;
        padding: 0.5rem;
        margin-left: 0.5rem;
        background-color: ${theme.colors.purpleDark};
        border-radius: 6px;
        border: 0;
        transition: 0.2s;

        &:hover {
          background-color: ${theme.colors.purple};
        }
      }

      div {
        button {
          width: 1.5rem;
          margin: 0;
          font-size: 1rem;
          font-weight: 400;
          color: ${theme.colors.purple};
          background-color: ${theme.colors.buttonColor};
          border-radius: 6px 0 0 6px;
          border: 0;
          z-index: 2;
          transition: 0.2s;

          &:hover {
            color: ${theme.colors.purpleDark};
            background-color: ${theme.colors.buttonColor};
          }
        }
        button:last-child {
          border-radius: 0 6px 6px 0;
        }
        span {
          width: 1.5rem;
          height: 2.375rem;
          font-family: ${theme.fonts.roboto};
          font-size: 1rem;
          font-weight: 400;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.titleColor};
          background-color: ${theme.colors.buttonColor};
        }
      }
    }
  `}
`
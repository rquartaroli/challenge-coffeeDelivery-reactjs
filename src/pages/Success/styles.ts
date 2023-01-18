import styled, { css } from "styled-components";

export const ContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    padding: 0 1rem;
  }
`

export const TextSuccess = styled.strong`
  ${({ theme }) => css`
    font-family: '${theme.fonts.baloo2}';
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;
    color: ${theme.colors.yellowDark};
    margin-top: 5rem;
  `}
`

export const TextInfo = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.roboto};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${theme.colors.subtitleColor};
  `}
`

export const ContentSuccess = styled.div`
  height: 18.31rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const LinearBorder = styled.div`
   padding: 0.10rem;
  position: relative;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.yellow} 0%,
    ${(props) => props.theme.colors.purple} 100%
  );
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const ContainerAddress = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 32.875rem;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background: ${theme.colors.background};
    border-radius: 6px 36px;
  `}
`

export const RowAddress = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const WrapperIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
`

export const WrapperLocale = styled(WrapperIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple};
  `}
`

export const WrapperTimer = styled(WrapperIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow};
  `}
`

export const WrapperPayment = styled(WrapperIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellowDark};
  `}
`

export const ColumnInRowWithInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
    }

    strong {
      font-family: ${theme.fonts.roboto};
      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.textColor};
    }
  `}
`

export const ContainerDeliveryman = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
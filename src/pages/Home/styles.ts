import styled, { css } from 'styled-components';

import BackgroundImage from "../../assets/background-coffee.png";

export const ContainerBackgroundImg = styled.div`
  width: 100%;
  height: 34rem;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
  position: absolute;
  top: 6.5rem;
  left: 0;
  right: 0;
  filter: blur(0.5rem);
`

export const ContainerIntro = styled.div`
  height: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.75rem 0;
  z-index: 5;
`

export const ContentLeft = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 36.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-family: '${theme.fonts.baloo2}';
      font-size: 3rem;
      font-weight: 800;
      color: ${theme.colors.titleColor};
      line-height: 3.9rem;

      @media (max-width: 1080px) {
        font-size: 2rem;
      }
    }

    span {
      font-family: ${theme.fonts.roboto};
      font-size: 1.25rem;
      font-weight: 400;
      color: ${theme.colors.subtitleColor};
      line-height: 1.625rem;
    }

    @media (max-width: 1080px) {
      padding: 0 1rem;
    }
  `}
`

export const WrapperService = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4.125rem;
`

export const RowItemService = styled.div`
  ${({ theme }) => css`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  span {
    font-family: ${theme.fonts.roboto};
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.textColor};
    line-height: 1.3rem;
  }
  `}
`

const WrapperCircleIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin-right: 0.75rem;
`

export const WrapperIconServiceCart = styled(WrapperCircleIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellowDark};
  `}
`

export const WrapperIconServicePackage = styled(WrapperCircleIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.textColor};
  `}
`

export const WrapperIconServiceTimer = styled(WrapperCircleIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow};
  `}
`

export const WrapperIconServiceCoffee = styled(WrapperCircleIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple};
  `}
`

export const ContentRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerCoffee = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0 9.8125rem;

    strong {
      font-family: '${theme.fonts.baloo2}';
      font-size: 2rem;
      font-weight: 800;
      color: ${theme.colors.subtitleColor};
      line-height: 2.6rem;
      margin-bottom: 2.125rem;

      @media (max-width: 1080px) {
        padding: 0 1rem;
      }
    }
  `}
`

export const ContentCoffeeCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
    align-self: center;
  }

  @media (max-width: 830px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`
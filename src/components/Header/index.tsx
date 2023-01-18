import { NavLink } from 'react-router-dom';
import { useTheme } from "styled-components";
import { MapPin, ShoppingCart } from "phosphor-react";

import * as S from "./styles";

import Logo from '../../assets/logo.png';
import { useShoppingCart } from '../../hooks/shoppingCartContext';

export function Header() {
  const theme = useTheme();

  const { amountCoffeeInCart } = useShoppingCart();

  return (
    <S.Container>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      
      <nav>
        <NavLink to="/">
          <S.WrapperLocation>
            <MapPin color={theme.colors.purple} weight="fill" width={18} height={18} />
            <S.TextLocation>Salto, SP</S.TextLocation>
          </S.WrapperLocation>
        </NavLink>

        <NavLink to="/checkout" style={{ position: 'relative' }}>
          {amountCoffeeInCart > 0
          &&
          <S.AmountItensInCart>
            <span>{amountCoffeeInCart}</span>
          </S.AmountItensInCart>
          }
          <S.WrapperCart>
              <ShoppingCart color={theme.colors.yellowDark} weight="fill" width={18} height={18} />
          </S.WrapperCart>
        </NavLink>
      </nav>
    </S.Container>
  )
}
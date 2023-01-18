import { useTheme } from "styled-components";
import { Trash } from "phosphor-react";

import * as S from "./styles";

import { TYPE_COFFEE } from "../Helpers/helperCoffeeCards";

type CoffeeCardInRowProps = {
  typeCoffee: keyof typeof TYPE_COFFEE,
  titleCoffee: string,
  price: number,
  amount: number,
  incrementCoffee: () => void,
  decrementCoffee: () => void,
  removeCoffeeFromCart: () => void,
}

export function CoffeeCardInRow({ 
  typeCoffee, 
  titleCoffee, 
  price, 
  amount,
  incrementCoffee,
  decrementCoffee,
  removeCoffeeFromCart,
 }: CoffeeCardInRowProps) {
  const theme = useTheme();

  const totalCoffee = Intl.NumberFormat('pt-BR', {
                                          style: "currency",
                                          currency: "BRL",
                                          maximumFractionDigits: 2,
                                        }).format((price * amount));

  return (
    <S.Container>
      <S.Content>
        <img src={TYPE_COFFEE[typeCoffee]} alt={titleCoffee} width={64} height={64} />

        <S.ContentColumn>
          <S.ContentRowText>
            <span>{titleCoffee}</span>
            <strong>{totalCoffee}</strong>
          </S.ContentRowText>
          <S.ContentRowButtonsInteraction>
            <S.RowButtonAmount>
              <button onClick={decrementCoffee}>-</button>
              <span>{amount}</span>
              <button onClick={incrementCoffee}>+</button>
            </S.RowButtonAmount>

            <S.ButtonRemove onClick={removeCoffeeFromCart}>
              <Trash color={theme.colors.purple} weight="regular" width={16} height={16} />
              <span>REMOVER</span>
            </S.ButtonRemove>
          </S.ContentRowButtonsInteraction>
        </S.ContentColumn>
      </S.Content>
      
      <S.HR />
    </S.Container>
  )
}
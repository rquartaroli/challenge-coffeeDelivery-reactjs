import { ShoppingCartSimple } from "phosphor-react";
import { useTheme } from "styled-components";

import { TYPE_COFFEE } from "../Helpers/helperCoffeeCards";
import * as S from './styles';

type CoffeeCardProps = {
  typeCoffee: keyof typeof TYPE_COFFEE,
  tags: string[],
  titleCoffee: string,
  descriptionCoffee: string,
  price: number,
  amount: number,
  incrementCoffee: () => void,
  decrementCoffee: () => void,
  addCoffeeToCart: () => void,
}

export function CoffeeCard({ 
  typeCoffee, 
  tags, 
  titleCoffee, 
  descriptionCoffee, 
  price,
  amount,
  incrementCoffee,
  decrementCoffee,
  addCoffeeToCart,
}: CoffeeCardProps) {
  const theme  = useTheme();

  const priceFormated = Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format((price * amount));

  return (
  <S.ContainerCard>
    <img src={TYPE_COFFEE[typeCoffee]} alt={titleCoffee} width={120} height={120} />

    <S.TagsCoffee>
      {tags.map((tag, index) => 
        <div key={index}>
          <span>{tag}</span>
        </div>
      )}
    </S.TagsCoffee>

    <strong>{titleCoffee}</strong>
    <p>{descriptionCoffee}</p>

    <S.RowDataCart>
      <div>
        <span>R$</span>&nbsp;
        <strong>{priceFormated.substring(3)}</strong>
      </div>

      <div>
        <div>
          <button onClick={decrementCoffee}>-</button>
          <span>{amount}</span>
          <button onClick={incrementCoffee}>+</button>
        </div>
        <button onClick={addCoffeeToCart}>
        <ShoppingCartSimple color={theme.colors.background} weight="fill" width={20} height={20} />
        </button>
      </div>
    </S.RowDataCart>
  </S.ContainerCard>
  )
}
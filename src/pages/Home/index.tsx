import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

import * as S from "./styles";

import CoffeeCup from '../../assets/coffee-cup.png';
import { CoffeeCard } from "../../components/CoffeeCard";
import { coffeeMenu, CoffeeMenuProps } from "../../utils/CoffeeMenu";
import { useState } from "react";
import { useShoppingCart } from "../../hooks/shoppingCartContext";

export function Home() {
  const [coffeeAvailable, setCoffeeAvailable] = useState<CoffeeMenuProps[]>(coffeeMenu);
  const theme = useTheme();

  const { addCoffeeInCart } = useShoppingCart();

  function handleIncrementCoffee(idCoffee: string) {
    setCoffeeAvailable((state) => 
      state.map((coffee) => {
        if(coffee.id === idCoffee) {
          return {...coffee, amount: coffee.amount + 1 }
        } else {
          return coffee
        }
      })
    )
  }

  function handleDecrementCoffee(idCoffee: string) {
    setCoffeeAvailable((state) => 
      state.map((coffee) => {
        if(coffee.id === idCoffee) {
          if(coffee.amount > 1) {
            return {...coffee, amount: coffee.amount - 1 }
          } else {
            return coffee
          }
        } else {
          return coffee
        }
      })
    )
  }

  function handleAddCoffeeToCart(idCoffee: string) {
    const coffeeExists = coffeeAvailable.find((coffee) => coffee.id === idCoffee)
    if(coffeeExists) {
      addCoffeeInCart(coffeeExists)
      alert('Café adicionado com sucesso!')
    }
  }

  return (
    <>
    <S.ContainerBackgroundImg />
      <S.ContainerIntro>
        <S.ContentLeft>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <S.WrapperService>
            <div>
              <S.RowItemService>
                <S.WrapperIconServiceCart>
                  <ShoppingCart color={theme.colors.background} weight="fill" width={16} height={16} />
                </S.WrapperIconServiceCart>
                <span>Compra simples e segura</span>
              </S.RowItemService>

              <S.RowItemService>
                <S.WrapperIconServiceTimer>
                  <Timer color={theme.colors.background} weight="fill" width={16} height={16} />
                </S.WrapperIconServiceTimer>
                <span>Entrega rápida e rastreada</span>
              </S.RowItemService>
              
            </div>

            <div>
              <S.RowItemService>
                <S.WrapperIconServicePackage>
                  <Package color={theme.colors.background} weight="fill" width={16} height={16} />
                </S.WrapperIconServicePackage>
                <span>Embalagem mantém o café intacto</span>
              </S.RowItemService>

              <S.RowItemService>
                <S.WrapperIconServiceCoffee>
                  <Coffee color={theme.colors.background} weight="fill" width={16} height={16} />
                </S.WrapperIconServiceCoffee>
                <span>O café chega fresquinho até você</span>
              </S.RowItemService>
            </div>
            
          </S.WrapperService>
        </S.ContentLeft>

        <S.ContentRight>
          <img src={CoffeeCup} alt="Copo de café" width="100%" />
        </S.ContentRight>
      </S.ContainerIntro>

      <S.ContainerCoffee>
        <strong>Nossos cafés</strong>
        <S.ContentCoffeeCard>
          {coffeeAvailable.map((coffee) => 
            <CoffeeCard 
              key={coffee.id}
              typeCoffee={coffee.typeCoffee}
              tags={coffee.tags}
              titleCoffee={coffee.titleCoffee}
              descriptionCoffee={coffee.descriptionCoffee}
              price={coffee.price}
              amount={coffee.amount}
              incrementCoffee={() => handleIncrementCoffee(coffee.id)}
              decrementCoffee={() => handleDecrementCoffee(coffee.id)}
              addCoffeeToCart={() => handleAddCoffeeToCart(coffee.id)}
            />
          )}
        </S.ContentCoffeeCard>
      </S.ContainerCoffee>
    </>
  )
}
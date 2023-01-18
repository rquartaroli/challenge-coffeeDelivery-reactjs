import { createContext, ReactNode, useContext, useState } from "react";
import { CoffeeMenuProps } from "../utils/CoffeeMenu";

interface ShoppingCartProviderProps {
  children: ReactNode
}

export type OrderUserProps = {
  cep: string
  street: string
  numberHome: string
  complement?: string
  district: string
  city: string
  state: string
  typePayment: "credit" | "debit" | "money"
  orderedCoffees: CoffeeMenuProps[]
}

interface ShoppingCartContextData {
  addCoffeeInCart: (coffeForAddToCart: CoffeeMenuProps) => void;
  coffeeInCart: CoffeeMenuProps[]
  amountCoffeeInCart: number
  totalCoffeeInCart: number
  incrementCoffeeInCart: (coffeForAddToCart: CoffeeMenuProps) => void;
  decrementCoffeeFromCart: (coffeForAddToCart: CoffeeMenuProps) => void;
  removeCoffeeInCart: (coffeForAddToCart: CoffeeMenuProps) => void;
  submitOrderUser: (orderUser: OrderUserProps) => void;
  orderUser: OrderUserProps
}

const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export const DELIVERY_VALUE = 3.50

function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [coffeeInCart, setCoffeeInCart] = useState<CoffeeMenuProps[]>([]);
  const [orderUser, setOrderUser] = useState<OrderUserProps>({} as OrderUserProps);
  const [amountCoffeeInCart, setAmountCoffeeInCart] = useState<number>(0);
  const [totalCoffeeInCart, setTotalCoffeeInCart] = useState<number>(0);

  function submitOrderUser(orderUser: OrderUserProps) {
    setOrderUser(orderUser)
    setAmountCoffeeInCart(0)
    setTotalCoffeeInCart(0)
    setCoffeeInCart([])
  }

  function addCoffeeInCart(coffeeForAddToCart: CoffeeMenuProps) {
    const existsCoffeeInCart = coffeeInCart.find((coffee) => coffee.id === coffeeForAddToCart.id)
    if(existsCoffeeInCart) {
      setCoffeeInCart((state) => 
        state.map((coffee) => {
          if(coffee.id === coffeeForAddToCart.id) {
            return {...coffee, amount: coffee.amount + coffeeForAddToCart.amount }
          } else {
            return coffee
          }
        })
      )

      let amountInCart =  amountCoffeeInCart
      amountInCart += coffeeForAddToCart.amount

      let priceInCart =  0
      priceInCart = totalCoffeeInCart + (coffeeForAddToCart.amount * coffeeForAddToCart.price);

      setAmountCoffeeInCart(amountInCart)
      setTotalCoffeeInCart(priceInCart)
    } else {
      setCoffeeInCart((state) => [...state, coffeeForAddToCart])
      
      let amountInCart =  amountCoffeeInCart
      amountInCart += coffeeForAddToCart.amount

      let priceInCart =  0
      priceInCart = totalCoffeeInCart + (coffeeForAddToCart.amount * coffeeForAddToCart.price);

      setAmountCoffeeInCart(amountInCart)
      setTotalCoffeeInCart(priceInCart)

    }
    
  }

  function incrementCoffeeInCart(coffeeForAddToCart: CoffeeMenuProps) {
    const existsCoffeeInCart = coffeeInCart.find((coffee) => coffee.id === coffeeForAddToCart.id)
    if(existsCoffeeInCart) {
      setCoffeeInCart((state) => 
        state.map((coffee) => {
          if(coffee.id === coffeeForAddToCart.id) {
            return {...coffee, amount: coffee.amount + 1 }
          } else {
            return coffee
          }
        })
      )

      let amountInCart =  amountCoffeeInCart
      amountInCart += 1

      let priceInCart =  0
      priceInCart = totalCoffeeInCart + (1 * coffeeForAddToCart.price);

      setAmountCoffeeInCart(amountInCart)
      setTotalCoffeeInCart(priceInCart)
    }
  }

  function decrementCoffeeFromCart(coffeeForAddToCart: CoffeeMenuProps) {
    const existsCoffeeInCart = coffeeInCart.find((coffee) => coffee.id === coffeeForAddToCart.id)
    if(existsCoffeeInCart) {
      setCoffeeInCart((state) => 
        state.map((coffee) => {
          if(coffee.id === coffeeForAddToCart.id) {
            if(coffee.amount > 1) {
              let amountInCart =  amountCoffeeInCart
              amountInCart -= 1

              let priceInCart =  0
              priceInCart = totalCoffeeInCart - (1 * coffeeForAddToCart.price);

              setAmountCoffeeInCart(amountInCart)
              setTotalCoffeeInCart(priceInCart)

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
  }

  function removeCoffeeInCart(coffeeForAddToCart: CoffeeMenuProps) {
    const existsCoffeeInCart = coffeeInCart.findIndex((coffee) => coffee.id === coffeeForAddToCart.id)
    if(existsCoffeeInCart >= 0) {
      let amountInCart =  amountCoffeeInCart
      amountInCart -= coffeeForAddToCart.amount

      let priceInCart =  0
      priceInCart = totalCoffeeInCart - (coffeeForAddToCart.amount * coffeeForAddToCart.price);

      setAmountCoffeeInCart(amountInCart)
      setTotalCoffeeInCart(priceInCart)

      coffeeInCart.splice(existsCoffeeInCart, 1)

      setCoffeeInCart([...coffeeInCart])
    }
  }

  return (
    <ShoppingCartContext.Provider value={{
      addCoffeeInCart,
      coffeeInCart,
      amountCoffeeInCart,
      totalCoffeeInCart,
      incrementCoffeeInCart,
      decrementCoffeeFromCart,
      removeCoffeeInCart,
      submitOrderUser,
      orderUser,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

function useShoppingCart() {
  const context = useContext(ShoppingCartContext);

  return context;
}

export { ShoppingCartProvider, useShoppingCart };
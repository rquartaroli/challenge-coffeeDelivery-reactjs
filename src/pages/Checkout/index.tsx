import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";

import { ButtonConfirm } from "../../components/ButtonConfirm";
import { CoffeeCardInRow } from "../../components/CoffeeCardInRow";
import { IconButtonFormOfPayment } from "../../components/IconButtonFormOfPayment";
import { IFormValues, InputText } from "../../components/Input";
import { DELIVERY_VALUE, OrderUserProps, useShoppingCart } from "../../hooks/shoppingCartContext";
import { CoffeeMenuProps } from "../../utils/CoffeeMenu";

import * as S from "./styles";

const addressUserFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'Obrigatório'),
  street: zod.string().min(1, 'Obrigatório').trim(),
  numberHome: zod.string().min(1, 'Obrigatório'),
  complement: zod.string().trim(),
  district: zod.string().min(1, 'Obrigatório').trim(),
  city: zod.string().min(1, 'Obrigatório').trim(),
  state: zod.string().length(2, "Obrigatório"),
})

export function Checkout() {
  const { register, handleSubmit, setValue } = useForm<IFormValues>({
    resolver: zodResolver(addressUserFormValidationSchema)
  });
  const theme = useTheme();
  const [whichSelected, setWhichSelected] = useState<"credit" | "debit" | "money" | "">('');

  const navigate = useNavigate();

  const { 
    coffeeInCart,
    totalCoffeeInCart,
    incrementCoffeeInCart,
    decrementCoffeeFromCart,
    removeCoffeeInCart,
    submitOrderUser,
  } = useShoppingCart();

  function handleSelectFormOfPayment(formPayment: "credit" | "debit" | "money" | "") {
    setWhichSelected(formPayment)
  }

  function handleIncrementCoffee(Coffee: CoffeeMenuProps) {
    incrementCoffeeInCart(Coffee)
  }

  function handleDecrementCoffee(Coffee: CoffeeMenuProps) {
    decrementCoffeeFromCart(Coffee)
  }

  function handleRemoveCoffeeFromCart(Coffee: CoffeeMenuProps) {
    if(confirm("Deseja realmente remover esse café?")) {
      removeCoffeeInCart(Coffee)
    }
  }

  async function handleLoadingAddress(cepUser: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cepUser}/json`)
                      .then((response) => response.json())
                      .then((data) => data)

    if(response.cep) {
      setValue("street", response.logradouro)
      setValue("district", response.bairro)
      setValue("city", response.localidade)
      setValue("state", response.uf)
    }
  }
  
  function handleSubmitOrder(data: any) {
    if(whichSelected === '') {
      alert("Selecione a forma de pagamento");
      return;
    } else {
      const newOrder = {
        cep: data.cep,
        street: data.street,
        numberHome: data.numberHome,
        complement: data.complement,
        district: data.district,
        city: data.city,
        state: data.state.toUpperCase(),
        typePayment: whichSelected,
        orderedCoffees: coffeeInCart,
      } as OrderUserProps

      submitOrderUser(newOrder)

      navigate("/success")
    }
  }

  return (
    <S.FormContainer>
      <S.FormContent>
        <S.TitleForm>Complete seu pedido</S.TitleForm>
        <S.Form>
          <div>
            <MapPinLine color={theme.colors.yellowDark} weight="regular" width={22} height={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <S.WrapperFormFields id="formAddress" onSubmit={handleSubmit(handleSubmitOrder)}>
            <S.WrapperCep>
              <InputText 
                type="text" 
                placeholder="CEP"
                maxLength={8}
                nameValidate="cep"
                register={register}
                onBlur={(e) => handleLoadingAddress(e.target.value)}
                required
              />
            </S.WrapperCep>

            <S.WrapperStreet>
              <InputText 
                type="text" 
                placeholder="Rua"
                nameValidate="street"
                register={register}
                required
              />
            </S.WrapperStreet>

            <S.RowNumberAndComplement>
              <S.WrapperNumber>
                <InputText 
                  type="text" 
                  placeholder="Número"
                  nameValidate="numberHome"
                  register={register}
                  required
                />
              </S.WrapperNumber>

              <S.WrapperComplement>
                <InputText 
                  id="complement"
                  type="text" 
                  placeholder="Complemento"
                  style={{ borderRight: 0, borderRadius: `4px 0 0 4px` }}
                  nameValidate="complement"
                  register={register}
                />
                <S.OptionalLabel>
                  <label htmlFor="complement">Opcional</label>
                </S.OptionalLabel>
              </S.WrapperComplement>
            </S.RowNumberAndComplement>

            <S.RowCity>
              <S.WrapperDistrict>
                <InputText 
                  type="text" 
                  placeholder="Bairro"
                  nameValidate="district"
                  register={register}
                  required
                />
              </S.WrapperDistrict>
              <S.WrapperCity>
                <InputText 
                  type="text" 
                  placeholder="Cidade"
                  nameValidate="city"
                  register={register}
                  required
                />
              </S.WrapperCity>
              <S.WrapperState>
                <InputText 
                  type="text" 
                  placeholder="UF"
                  maxLength={2}
                  nameValidate="state"
                  register={register}
                  required
                  style={{ textTransform: 'uppercase' }}
                />
              </S.WrapperState>
            </S.RowCity>
          </S.WrapperFormFields>
        </S.Form>
        <S.FormOfPayment>
          <div>
            <CurrencyDollar color={theme.colors.purple} weight="regular" width={22} height={22} />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <S.WrapperFormOfPayments>
            <IconButtonFormOfPayment 
              onClick={() => handleSelectFormOfPayment("credit")}
              titleButton="cartão de crédito"
              isSelected={whichSelected === "credit" ? true : false}
              phosphorIcon={<CreditCard color={theme.colors.purple} weight="regular" width={16} height={16} />}
            />
            <IconButtonFormOfPayment 
              onClick={() => handleSelectFormOfPayment("debit")}
              titleButton="cartão de débito"
              isSelected={whichSelected === "debit" ? true : false}
              phosphorIcon={<Bank color={theme.colors.purple} weight="regular" width={16} height={16} />}
            />
            <IconButtonFormOfPayment 
              onClick={() => handleSelectFormOfPayment("money")}
              titleButton="dinheiro"
              isSelected={whichSelected === "money" ? true : false}
              phosphorIcon={<Money color={theme.colors.purple} weight="regular" width={16} height={16} />}
            />
          </S.WrapperFormOfPayments>
        </S.FormOfPayment>
      </S.FormContent>

      <S.FormAmountCoffee>
        <S.TitleForm>Cafés selecionados</S.TitleForm>
        {coffeeInCart.length > 0 
        ?
          <S.WrapperAmountCoffee>
            
            {coffeeInCart.map((coffee) => 
              <CoffeeCardInRow 
                key={coffee.id}
                typeCoffee={coffee.typeCoffee}
                titleCoffee={coffee.titleCoffee}
                price={coffee.price}
                amount={coffee.amount}
                incrementCoffee={() => handleIncrementCoffee(coffee)}
                decrementCoffee={() => handleDecrementCoffee(coffee)}
                removeCoffeeFromCart={() => handleRemoveCoffeeFromCart(coffee)}
              />
            )}

            <S.WrapperRowTotal>
              <span>Total de itens</span>
              <span>{Intl.NumberFormat('pt-BR', {
                                            style: "currency",
                                            currency: "BRL",
                                            maximumFractionDigits: 2,
                                          }).format(totalCoffeeInCart)}</span>
            </S.WrapperRowTotal>
            <S.WrapperRowTotal>
              <span>Entrega</span>
              <span>{Intl.NumberFormat('pt-BR', {
                                            style: "currency",
                                            currency: "BRL",
                                            maximumFractionDigits: 2,
                                          }).format(DELIVERY_VALUE)}</span>
            </S.WrapperRowTotal>
            <S.WrapperRowTotal>
              <strong>Total</strong>
              <strong>{Intl.NumberFormat('pt-BR', {
                                            style: "currency",
                                            currency: "BRL",
                                            maximumFractionDigits: 2,
                                          }).format(totalCoffeeInCart + DELIVERY_VALUE)}</strong>
            </S.WrapperRowTotal>

            <S.WrapperButton>
              <ButtonConfirm titleButton="Confirmar Pedido" form="formAddress" type="submit" />
            </S.WrapperButton>
            
          </S.WrapperAmountCoffee>
        :
          <S.WrapperAmountCoffee>
            <S.MessageEmptyCart>
              <strong>Nenhum item no carrinho :(</strong>
              <span>Você precisa inserir algum item no carrinho para concretizar a compra.</span>
            </S.MessageEmptyCart>
          </S.WrapperAmountCoffee>
        }
      </S.FormAmountCoffee>
    </S.FormContainer>
  )
}
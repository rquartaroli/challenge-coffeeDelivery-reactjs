import { useTheme } from "styled-components";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";

import * as S from "./styles";

import Deliveryman from "../../assets/deliveryman.png";
import { useShoppingCart } from "../../hooks/shoppingCartContext";

export function Success() {
  const theme = useTheme();
  const { orderUser } = useShoppingCart();

  return (
    <S.ContainerSuccess>
      <S.TextSuccess>Uhu! Pedido confirmado</S.TextSuccess>
      <S.TextInfo>Agora é só aguardar que logo o café chegará até você</S.TextInfo>

      <S.ContentSuccess>
        <S.LinearBorder>
        <S.ContainerAddress>
          <S.RowAddress>
            <S.WrapperLocale>
              <MapPin color={theme.colors.background} weight="fill" width={16} height={16} />
            </S.WrapperLocale>
          
            <S.ColumnInRowWithInfo>
              <span>Entrega em <strong>{orderUser.street}, {orderUser.numberHome}</strong></span>
              <span>{orderUser.district} - {orderUser.city}, {orderUser.state}</span>
            </S.ColumnInRowWithInfo>
          </S.RowAddress>

          <S.RowAddress>
            <S.WrapperTimer>
              <Timer color={theme.colors.background} weight="fill" width={16} height={16} />
            </S.WrapperTimer>
          
            <S.ColumnInRowWithInfo>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </S.ColumnInRowWithInfo>
          </S.RowAddress>

          <S.RowAddress>
            <S.WrapperPayment>
              <CurrencyDollar color={theme.colors.background} weight="fill" width={16} height={16} />
            </S.WrapperPayment>
          
            <S.ColumnInRowWithInfo>
              <span>Pagamento na entrega</span>
              <strong>
                {orderUser.typePayment === 'credit' 
                ?
                  'Cartão de Crédito' 
                : 
                  orderUser.typePayment === 'debit'
                ?
                  'Cartão de Débito' 
                :
                  'Dinheiro'
                }
              </strong>
            </S.ColumnInRowWithInfo>
          </S.RowAddress>
        </S.ContainerAddress>
        </S.LinearBorder>

        <S.ContainerDeliveryman>
          <img src={Deliveryman} alt="Entregador" width="85%" />
        </S.ContainerDeliveryman>
      </S.ContentSuccess>
    </S.ContainerSuccess>
  )
}
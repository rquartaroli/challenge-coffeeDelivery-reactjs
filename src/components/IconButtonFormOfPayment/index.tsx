import { ReactNode } from "react";

import * as S from "./styles";

type IconButtonFormOfPaymentProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  titleButton: 'cartão de crédito' | 'cartão de débito' | 'dinheiro',
  phosphorIcon: ReactNode
  isSelected: boolean,
}

export function IconButtonFormOfPayment({ titleButton, phosphorIcon, isSelected = false, ...rest }: IconButtonFormOfPaymentProps) {
  return (
    <S.Container isSelected={isSelected} {...rest}>
      {phosphorIcon}
      <span>{titleButton}</span>
    </S.Container>
  )
}
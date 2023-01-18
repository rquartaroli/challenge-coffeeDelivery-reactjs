import * as S from "./styles";

type ButtonConfirmProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  titleButton: string,
}

export function ButtonConfirm({ titleButton, ...rest }: ButtonConfirmProps) {
  return (
    <S.Container {...rest}>
      <span>{titleButton}</span>
    </S.Container>
  )
}
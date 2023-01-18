import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import * as S from "./styles";

export interface IFormValues {
  cep: string
  street: string
  numberHome: string
  complement: string
  district: string
  city: string
  state: string
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  nameValidate: Path<IFormValues>
  register: UseFormRegister<IFormValues>
}

export function InputText({nameValidate, register, ...props}: InputProps) {
  return (
    <S.InputField {...register(nameValidate)} {...props} />
  )
}
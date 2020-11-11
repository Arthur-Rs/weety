import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

export const Button = ({ children, loading, ...rest }: ButtonProps) => {
  return <Container {...rest}>{loading ? 'carregando...' : children}</Container>
}

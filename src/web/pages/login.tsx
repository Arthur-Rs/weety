import { FormHandles } from '@unform/core'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { ToggleTheme } from "../components/ToggleTheme"
import { getValidationErrors } from '../utils/GetValidationErros'
import * as S from '../styles/pages/LoginStyle'
import * as yup from 'yup'


interface FormData{
  email: string
  password: string
}

const Login = () => {
  
  const formRef = useRef<FormHandles>(null)

  const handleSubmitForm = useCallback( 
    async (data: FormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = yup.object().shape({
        email: yup
          .string()
          .email('E-mail inválido')
          .required('E-mail obrigatório'),
        password: yup.string().min(6, 'Mínimo de 6 caracteres'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  },[])

  return (
  <>
    <S.Container>
      <S.Content>
        <S.Title>Login</S.Title>
        <span>Bem-vindo de volta</span>
        <S.Form onSubmit={handleSubmitForm} ref={formRef}>      
          <Input 
            name="email" 
            type="email" 
            placeholder="Email" 
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="Senha" 
          />    
          <Link href="forgot">
            <S.Forgot>Esqueceu a senha?</S.Forgot>
          </Link>
          <Button>Fazer Login</Button>  
        </S.Form>
        <Link href="register">
          <S.Register>Novo usuário<FaSignInAlt /></S.Register>
        </Link>
        </S.Content>
      </S.Container>
    <ToggleTheme/>
  </>
  )
}

export default Login
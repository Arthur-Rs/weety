import { FormHandles } from '@unform/core'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import * as yup from 'yup'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { subYears } from 'date-fns'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { ToggleTheme } from '../components/ToggleTheme'
import { getValidationErrors } from '../utils/GetValidationErros'
import * as S from '../styles/pages/RegisterStyles'
import { InputData } from '../components/InputDate'
import { client } from '../providers/client'

interface FormData {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
  birth_date: Date
}

const Register = () => {
  const formRef = useRef<FormHandles>(null)

  const { push } = useRouter()

  const handleSubmitForm = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({})

      console.log(data.birth_date.getFullYear())

      const schema = yup.object().shape({
        first_name: yup.string().required('Nome obrigatório'),
        last_name: yup.string(),
        email: yup
          .string()
          .email('E-mail inválido')
          .required('E-mail obrigatório'),
        password: yup.string().min(6, 'Mínimo de 6 caracteres'),
        password_confirmation: yup
          .string()
          .required('Confirmação de senha obrigatório')
          .equals([yup.ref('password')], 'As senhas não se coincidem'),
        birth_date: yup
          .date()
          .max(subYears(new Date(), 13), 'Você precisa ter mais de 13 anos!')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await client.post('user', data)

      push('login')
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
        return
      }

      const axiosError = err as AxiosError

      const errorMessage = axiosError.response.data.error.validation.message

      if (errorMessage === 'unique validation failed on email') {
        formRef.current?.setFieldError(
          'email',
          'Este email já está sendo utilizado!'
        )
      }
    }
  }, [])

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Title>Cadastro</S.Title>
          <span>Seja bem vindo</span>
          <S.Form onSubmit={handleSubmitForm} ref={formRef}>
            <S.NameContainer>
              <Input icon={FiUser} name="first_name" placeholder="Nome" />
              <Input icon={FiUser} name="last_name" placeholder="Sobrenome" />
            </S.NameContainer>
            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Input
              icon={FiLock}
              name="password_confirmation"
              type="password"
              placeholder="Confirme sua senha"
            />
            <InputData title="Nascimento: " name="birth_date" />
            <Button>Fazer Cadastro</Button>
          </S.Form>
          <Link href="login">
            <S.Register>
              <FiArrowLeft />
              Voltar para login
            </S.Register>
          </Link>
        </S.Content>
      </S.Container>
      <ToggleTheme side="left" />
    </>
  )
}

export default Register

import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa"
import { ToggleTheme } from "../components/ToggleTheme"
import * as S from '../styles/pages/RegisterStyles'

const Forgot = () => {
  return (
  <>
    <S.Container>
      <S.Content>
        <S.Title>Recuperar Senha</S.Title>
        <S.Form onSubmit={()=>{}}>

        </S.Form>
        <Link href="login">
          <a><FaArrowLeft />Voltar</a>
        </Link>
        </S.Content>
      </S.Container>
    <ToggleTheme side="left"/>
  </>
  )
}

export default Forgot
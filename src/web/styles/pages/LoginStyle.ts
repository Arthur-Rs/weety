import styled from 'styled-components'
import { Form as UnformForm } from '@unform/web'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 100%;

  background: ${({ theme }) => theme.colors.background.normal};

  > span {
    font-size: 2.4rem;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 4.8rem;
`
export const Register = styled.a`
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.text.link};

  svg {
    margin-left: 0.8rem;
    stroke: ${({ theme }) => theme.colors.text.link};
  }
`
export const Forgot = styled.a`
  color: ${({ theme }) => theme.colors.text.dark};
  font-size: 1.4rem;
  margin-top: 0.8rem;
  align-self: flex-end;

  @media (max-width: 720px) {
    font-size: 1.8rem;
  }

  &:hover {
    text-decoration: underline;
  }
`
export const Form = styled(UnformForm)`
  width: 100%;
  padding: 0 6.4rem;
  margin: 6.4rem 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    padding: 0 4rem;
  }

  @media (max-width: 640px) {
    padding: 0 3.6rem;
  }

  @media (max-width: 440px) {
    padding: 0 2.3rem;
  }
`

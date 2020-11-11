import styled from 'styled-components'
import { Form as UnformForm } from '@unform/web'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: flex-start;
`

export const Content = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.background.normal};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  width: 50rem;

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
  align-items: center;
  color: ${({ theme }) => theme.colors.text.link};

  display: flex;
  font-size: 1.8rem;

  margin-bottom: 2.4rem;

  svg {
    margin-left: 0.8rem;
    stroke: ${({ theme }) => theme.colors.text.link};
  }
`
export const Forgot = styled.a`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.text.dark};
  font-size: 1.4rem;
  margin-top: 0.8rem;

  @media (max-width: 720px) {
    font-size: 1.8rem;
  }

  &:hover {
    text-decoration: underline;
  }
`
export const Form = styled(UnformForm)`
  display: flex;
  flex-direction: column;
  margin: 6.4rem 0;
  padding: 0 6.4rem;
  width: 100%;

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

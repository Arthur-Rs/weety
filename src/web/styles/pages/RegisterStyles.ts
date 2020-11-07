import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: 50rem;
  height: 100%;

  background: ${({theme}) => theme.colors.background.normal};
`

export const Title = styled.h1`
  font-size: 4.8rem
`

export const Form = styled(UnformForm)`

`

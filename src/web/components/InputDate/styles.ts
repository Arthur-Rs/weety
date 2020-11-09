import styled, { css } from 'styled-components'
import {Tooltip} from '../Tooltip'

interface SelectProps {
  isFocused: boolean
  isErrored: boolean
}

const drawBorderSelect = ({ isErrored, isFocused }:SelectProps) => {
  if(isFocused){
    return css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `
  }

  if(isErrored){
    return css`
      border: 2px solid ${({ theme }) => theme.colors.red};
    `
  }
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
`

export const Day = styled.select<SelectProps>`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  padding: 1.4rem;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  width: 20%;

  ${({ isErrored, isFocused }) => drawBorderSelect({ isErrored, isFocused })}
` 

export const Month = styled.select<SelectProps>`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  padding: 1.4rem;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  width: 60%;
  margin: 0 0.8rem;

  ${({ isErrored, isFocused }) => drawBorderSelect({ isErrored, isFocused })}
` 

export const Year = styled.select<SelectProps>`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  padding: 1.4rem;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  width: 20%;


  ${({ isErrored, isFocused }) => drawBorderSelect({ isErrored, isFocused })}
` 

export const Error = styled.span`
  height: 2rem;
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.8rem;
`

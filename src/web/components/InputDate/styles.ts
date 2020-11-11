import styled, { css } from 'styled-components'

interface SelectProps {
  isFocused: boolean
  isErrored: boolean
}

const drawBorderSelect = ({ isErrored, isFocused }: SelectProps) => {
  if (isFocused) {
    return css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `
  }

  if (isErrored) {
    return css`
      border: 2px solid ${({ theme }) => theme.colors.red};
    `
  }
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  width: 100%;

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
`

export const Day = styled.select<SelectProps>`
  background: ${({ theme }) => theme.colors.background.light};
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  padding: 1.4rem;
  width: 20%;

  ${({ isErrored, isFocused }) => drawBorderSelect({ isErrored, isFocused })}
`

export const Month = styled.select<SelectProps>`
  background: ${({ theme }) => theme.colors.background.light};
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  margin: 0 0.8rem;
  padding: 1.4rem;
  width: 60%;

  ${({ isErrored, isFocused }) => drawBorderSelect({ isErrored, isFocused })}
`

export const Year = styled.select<SelectProps>`
  background: ${({ theme }) => theme.colors.background.light};
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: 1.8rem;
  padding: 1.4rem;
  width: 20%;

  ${({ isErrored, isFocused }) => drawBorderSelect({ isErrored, isFocused })}
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.8rem;
  height: 2rem;
  margin-top: 0.8rem;
`

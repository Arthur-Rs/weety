import { useCallback } from 'react'
import { useTheme } from '../../hooks/ThemeHook'
import * as S from './styles'
import {FaMoon, FaSun} from 'react-icons/fa'

interface ToggleButtonProps {
  side?: 'right' | 'left'
}

export const ToggleTheme = ({ side = "right" }: ToggleButtonProps) => {
  const { toggleTheme, theme: { name, colors } } = useTheme()
  
  const handleToggleTheme = useCallback(()=>{
    toggleTheme()
  },[])
  
  
  return (
    <S.Container side={side} onClick={handleToggleTheme}>
      {name === 'light' 
        ? <FaSun color={colors.text.normal} /> 
        : <FaMoon color={colors.text.normal} />}
    </S.Container>
  )
}
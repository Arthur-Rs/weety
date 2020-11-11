import {
  InputHTMLAttributes,
  ComponentType,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  SyntheticEvent,
} from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'
import * as S from './styles'
import { useField } from '@unform/core'
import { getDaysInMonth } from 'date-fns'

// onFocus={() => {
//   setIsFocused(true)
//   clearError()
// }}
// onBlur={handleInputBlur}
// defaultValue={defaultValue}
// ref={inputRef}
// {...rest}

interface ValueRef{
  value: Date
}

interface InputDataProps {
  name: string
  title: string
}

export const InputData = ({ name, title }: InputDataProps) => {
  const { fieldName, error, clearError, registerField } = useField(name)
  
  const valueRef = useRef<ValueRef>({ value: new Date() })

  const selectDayRef = useRef<HTMLSelectElement>(null)
  const selectMonthRef = useRef<HTMLSelectElement>(null)
  const selectYearRef = useRef<HTMLSelectElement>(null)

  const [isFocusedDay, setIsFocusedDay] = useState(false)

  const [isFocusedMonth, setIsFocusedMonth] = useState(false)

  const [isFocusedYear, setIsFocusedYear] = useState(false)

  const [selectedDay, setSelectedDay] = useState(new Date().getDate())
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: valueRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  useEffect(() => {
    valueRef.current.value = new Date(selectedYear - 1, selectedMonth - 1, selectedDay)
  }, [selectedDay, selectedMonth, selectedYear])

  const handleDayFocus = useCallback(() => {
    setIsFocusedDay(true)
    clearError()
  }, [])

  const handleMonthFocus = useCallback(() => {
    setIsFocusedMonth(true)
    clearError()
  }, [])

  const handleYearFocus = useCallback(() => {
    setIsFocusedYear(true)
    clearError()
  }, [])

  const handleDayBlur = useCallback(() => {
    setIsFocusedDay(false)
  }, [])

  const handleMonthBlur = useCallback(() => {
    setIsFocusedMonth(false)
  }, [])

  const handleYearBlur = useCallback(() => {
    setIsFocusedYear(false)
  }, [])

  const handleSelectMonth = useCallback(
    (event: SyntheticEvent<HTMLSelectElement, Event>) => {
      setSelectedMonth(Number(event.currentTarget.value) + 1)
  }, [])

  const handleSelectDay = useCallback(
    (event: SyntheticEvent<HTMLSelectElement, Event>) => {
      setSelectedDay(Number(event.currentTarget.value) + 1)
  }, [])

  const handleSelectYear = useCallback(
    (event: SyntheticEvent<HTMLSelectElement, Event>) => {
      setSelectedYear(Number(event.currentTarget.value) + 1)
  }, [])

  const months = useMemo(() => [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Mail',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ], [])

  const days = useMemo(() => {
    const data = new Date(selectedYear, selectedMonth - 1)
    const daysInMoth = getDaysInMonth(data)
    
    const daysArray =  Array.from(
      { length: daysInMoth },
      (_, index) => index + 1
    );

    return daysArray
  }, [selectedMonth, selectedYear])

  const years = useMemo(() => {
    const distanceDate = new Date().getFullYear() - 120
    
    const yearsDate = Array.from(
      { length: 120, },
      (_, index) => index + distanceDate)

    return yearsDate
  }, [selectedMonth])

  return (
    <S.Container >
      <S.Title>{ title }</S.Title>
      <div>
        <S.Day
          onFocus={handleDayFocus}
          onBlur={handleDayBlur}
          ref={selectDayRef}
          isErrored={!!error} 
          isFocused={isFocusedDay} 
          defaultValue={selectedDay} 
          onChange={handleSelectDay}
          >
        {
          days.map((day, index) => (
            <option key={`days:${index}`} value={index}>{day}</option>
          ))
        }
        </S.Day>
        <S.Month 
          onFocus={handleMonthFocus}
          onBlur={handleMonthBlur}
          ref={selectMonthRef}
          isErrored={!!error} 
          isFocused={isFocusedMonth} 
          defaultValue={selectedMonth} 
          onChange={handleSelectMonth}
        >
        { 
          months.map((month, index) => (
            <option key={`months:${index}`} value={index}>{month}</option>
          ))
        }
        </S.Month>
        <S.Year     
          onFocus={handleYearFocus}
          onBlur={handleYearBlur}
          ref={selectYearRef}      
          isErrored={!!error} 
          isFocused={isFocusedYear} 
          defaultValue={selectedYear} 
          onChange={handleSelectYear}
        >
        { 
          years.map((year, index) => (
            <option key={`years:${index}`} value={year}>{year}</option>
          ))
        }
        </S.Year>
      </div>
      {
        error && (<S.Error>{error}</S.Error>)
      }
    </S.Container>
  )
}


import { Container } from './styles'

interface ToolTipProps{
  title: string
  className?: string
  children?: any
}

export const Tooltip = ({ title, className, children }: ToolTipProps) => {
  return (
    
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  )
}


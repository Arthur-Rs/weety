import styled, { css } from 'styled-components';

interface ContainerProps{
  side: 'right' | 'left'
} 

export const Container = styled.button<ContainerProps>`
  position: absolute;
  bottom: 3.2rem;

  ${({ side }) => 
    side === 'right' 
    ? css`right: 3.2rem;` 
    : css`left: 3.2rem;`  
  }

  width: 4.8rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background.normal};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media(max-width: 720px){
    width: 6rem;
    height: 6rem;
    left: auto;
    bottom: auto;
    top: 3.2rem;
    right: 3.2rem;
    opacity: 0.7;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  
`;

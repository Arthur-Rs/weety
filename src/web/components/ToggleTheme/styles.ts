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
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media(max-width: 720px){
    width: 6rem;
    height: 6rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  
`;

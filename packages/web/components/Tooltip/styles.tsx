import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 16rem;
    background: ${({ theme }) => theme.colors.primary};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 200;
    text-align: center;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.colors.black};
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`

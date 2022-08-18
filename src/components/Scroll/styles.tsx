import styled from '@emotion/styled'
import { BiUpArrowCircle as Up } from 'react-icons/bi'

export const Arrow = styled(Up)`
  z-index: 2;
  background: transparent;
  color: #777;
  border-radius: 50%;
  transition: 0.3s;
  position: fixed;
  bottom: 14vh;
  :hover {
    transition: 0.3s;
    background: transparent;
  }
  right: calc(1.8vw - 1em / 1);
`

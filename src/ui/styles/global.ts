import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'
import './reset.css'
import './fonts.css'

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.white};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @supports(scrollbar-width: thin) {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${theme.palette.white} transparent;
    }
  }

  body {
    position: relative;
    font-family: ${theme.fontFamily.montserrat}, sans-serif;
    color: ${theme.palette.white};
    overflow-x: hidden;
    overflow-y: auto;

    &.m-show-modal {
      overflow: hidden;
    }
  }

  #root {
    position: relative;
    display: flex;
    height: 100%;
    overflow: hidden;
    transition: filter .3s linear;
  }

  .blur {
    filter: blur(12px);
  }

  .overflow-hidden{
    overflow: hidden;
  }

  b,
  strong {
    font-weight: 600;
  }
`

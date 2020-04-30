import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    line-height: normal;
    font-size: 14px;
    outline: none;
  }

    
  * {
    box-sizing: border-box;

    /* scrollbar styling */
    scrollbar-color: #fafafa;

    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 11px;
      height: 11px;
    }
    ::-webkit-scrollbar-track {
      background: #fafafa; 
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 7px;
      border: 2px solid #fafafa;
      background-color: rgba(0,0,0, 0.2);
    }
  }


  a {
    text-decoration: none;
  }

  input, textarea {
   -webkit-appearance: none;
   -webkit-border-radius: 0;
   border-radius: 0;
  }


`;

export default GlobalStyle;

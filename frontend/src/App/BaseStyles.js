import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;   
    background-color: ${(props) =>
      props.theme ? props.theme.colors.background : "white"};    
  }

  body {
    color: ${(props) => props.theme.colors.textPrimary};
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    font-size:16px;
    font-family: "CircularStdBook"; 
    font-weight: normal;
    
  }
  #root {
    display: flex;
    flex-direction: column;
    
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
  }
  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, strong {
   font-weight: bold;
  }
  button {
    background: none;    
  }
  /* Workaround for IE11 focus highlighting for select elements */
  select::-ms-value {
    background: none;
    color: #42413d;
  }
  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }
  [role="button"], button, input, textarea {
    appearance: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  select::-ms-expand {
    display: none;
  }
  
  p {
    line-height: 1.4285;
  }
  textarea {
    line-height: 1.4285;
  }
  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    touch-action: manipulation;
  }


/* set height for editable content area, by default it is just 1 line 
https://stackoverflow.com/questions/46559354/how-to-set-the-height-of-ckeditor-5-classic-editor
*/
.ck-editor__editable_inline {
  min-height: 125px;
  max-height: 125px;
  margin-left: 1px;
  margin-right: 1px;
}

.ck-content code {
    background-color: hsla(0, 0%, 78%, 0.3);
    padding: .15em;
    border-radius: 2px;
}

.ck-content:hover, .ck-content:focus{
  border: 1px solid #0AC6E0!important;
}

/** Custom toolbar */


/* #style-7::-webkit-scrollbar { */
  ::-webkit-scrollbar {
  height: 12px;
  width: 10px;
  /* background-color: #f5f5f5; */
}

/** STYLE 7 */
::-webkit-scrollbar-track { 
  background-color: transparent; 
  border-radius: 10px;   
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-scrollbar-thumb:vertical {
  border-radius: 10px; 
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: ${(props) => props.theme.colors.primary};
}

::-webkit-scrollbar-thumb:horizontal {
  border-radius: 10px; 
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: ${(props) => props.theme.colors.primary};
}


`;

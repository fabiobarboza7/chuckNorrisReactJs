import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: grey;
    -webkit-font-smoothing: antialiased !important;
  }

  input {
    text-transform: capitalize;
    height: 25px;
    padding: 0 5px 0 10px;
    border-radius: 4px;
    border: 1px solid purple;
    color: purple;
  }

  button {
    cursor: pointer;
    height: 25px;
    margin-left: 5px;
    border-radius: 4px;
    padding: 0 10px;
    border: 1px solid purple;
    color: purple;
    transition: 0.5s;
  }

  button:hover {
    background-color: purple;
    color: #fff;
  }

  ::placeholder {
    color: purple;
    opacity: 0.5;
  }

`;

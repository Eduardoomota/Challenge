import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.typography.primary};
    }

    button{
        background: none;
        border: none;

    }
    
    input{
        border: none;
        &:focus{
            outline: none;
        }
    }

    ul{
        padding: 0;
        list-style: none;
    }

    body{
        background-color: ${({ theme }) => theme.colors.gray.primary} ;
    }
`;

export default GlobalStyle;

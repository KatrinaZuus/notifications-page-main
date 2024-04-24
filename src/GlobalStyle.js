import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    html {
        font-size: 62.5%
    }

    body {
        padding: 2.4rem 1.6rem 2.9rem;
        min-width: 37.5rem;
        height: 100vh;
        font-family: "PlusJakartaSans", sans-serif;
        display: flex;
        justify-content: center;
        background-color: #f9fafd;
        overflow: none;

        @media (min-width: 90rem){
            padding: 6.3rem 35.5rem 8.9rem;
        }
    }

 
`
import styled from "styled-components";

export const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #111111;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 300px;
    border: 2px solid #3cf8c0;
    border-radius: 8px;
    margin: 15px; 
`

export const Input = styled.input`
    width: 400px;
    height: 20px;
    padding: 6px 16px;
    border: 2px solid #3cf8c0;
    border-radius: 8px;
    background: transparent;
    color: #fff;
    outline: none;
`

export const Button = styled.button`
    width: 210px;
    height: 32px;
    padding: 8px 16px;
    background: #3cf8c0;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #fff;
        background: #4fe5b8;
    }
    &:active {
        background: #6F2232;
    }

    &:disabled {
        color: #878787;
        background: #4E4E50;
    }
`

export const H1 = styled.span`
    color: #FFF;
    font-size: 20px;
    margin-bottom: 15px;
`
export const Text = styled.span`
    color: #FFF;
    font-size: 14px;
`
export const TextLink = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #3cf8c0;
    cursor: pointer;
`
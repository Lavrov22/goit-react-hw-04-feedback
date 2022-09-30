import styled from 'styled-components'

export const FeedbackList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
`
export const Button = styled.button`
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 32px;
    border: rgba(0,0,0,0);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover{
        background-color: #188ce8;
    }
    :focus{
        background-color: #188ce8;
    }
`
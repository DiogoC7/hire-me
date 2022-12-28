import React from 'react'
import styled, { css } from 'styled-components'

const ButtonComponent = styled.button`
    padding: 15px 15px;
    white-space: nowrap;
    position: relative;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 20px;
    font-size: 1.2em;
    border: 0.5px solid ${props => props.backgroundColor === 'blue' ? 'black' : props.backgroundColor === "none" ? '#2de3e6dc' : ''};
    background-color: ${props => props.backgroundColor === 'blue' ? '#2de3e6dc' : props.backgroundColor === "none" ? 'rgba(0, 0, 0, .0)' : ''};
    color: ${props => props.backgroundColor === "blue" ? 'white' : '#2de3e6dc'};
`;

const Button = ({type, className, id, onClick, backgroundColor, children}) => {
  return <ButtonComponent 
    type={type ? type: "button"} 
    className = {className ? 'btn-component' + {className} : 'btn-component'}
    backgroundColor = {backgroundColor}
    id = {id}
    onClick = {onClick}>
        {children}
    </ButtonComponent>
}

export default Button
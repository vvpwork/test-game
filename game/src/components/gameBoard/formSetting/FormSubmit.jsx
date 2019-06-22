import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    box-shadow: none;
    outline: none;
    width:110px;
    font-size:16px;
    text-align: center;
    color: snow;
    text-transform: uppercase;
    background: #7B8D93;
    border-radius: 5px;
    &:hover{
        outline:none;
        border: none;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        cursor: pointer;
    }
`

const submitButton = ({ value }) => <StyledButton type="submit">{value}</StyledButton>;

export default submitButton;
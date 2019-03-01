import React, { ReactChild, ReactChildren, useState, useCallback } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    font-size: 17px;
    line-height: 1.7;
    font-family: "Avenir Next Rounded",sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    -webkit-font-smoothing: antialiased;
    margin-bottom: 16px;
`;

type FormProps = { children: any, onChange: any }

export default ({children, onChange}: FormProps) => {
    const [state, set] = useState([]);
    const setState = useCallback((newState) => {
        set(newState);
        onChange(newState);
    }, [set])
    return (
        <Form>{
            React.Children.map(children, child => ({...child, props: { ...child.props, state, setState }}))
        }</Form>
    )
};

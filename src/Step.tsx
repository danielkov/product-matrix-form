import React, { useCallback } from 'react';
import styled from "styled-components";

const Input = styled.input`
margin-right: 12px;
`;

export type StepProps = {
    index: number,
    question: string,
    options: string[],
    state?: number[],
    setState?: (newState?: number[]) => void
};

export default ({ index, question, options, state, setState }: StepProps) => {
    const changeValue = useCallback((value) => {
        const newState = [...state!];
        newState[index] = value;
        setState!(newState);
    }, [state]);
    return (
        <div>
        <h3>{question}</h3>
        {options.map((option, i) => (
            <div key={option}>
                <label htmlFor={`radio-${index}-${i}`}>
                    <Input type="radio" name={`${index}`} value={i} onChange={e => changeValue(parseInt(e.target.value, 10))} id={`radio-${index}-${i}`}/>
                    {option}
                </label>
            </div>
        ))}
        </div>
    );
};

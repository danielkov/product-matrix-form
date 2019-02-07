import React, { useCallback } from 'react';

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
                <label htmlFor={`${index}`}>
                    <input type="radio" name={`${index}`} value={i} onChange={e => changeValue(parseInt(e.target.value, 10))} />
                    {option}
                </label>
            </div>
        ))}
        </div>
    );
};

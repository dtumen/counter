import React from 'react';
import './Button.module.css';

type ButtonPropsType = {
    name: string
    disabled: boolean
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    )
}
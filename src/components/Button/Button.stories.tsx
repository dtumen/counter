import type {Meta} from '@storybook/react';

import {Button} from './Button';
import {useState} from 'react';

const meta: Meta<typeof Button> = {
    title: 'Stories/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        backgrounds: {
            values: [
                {name: 'light', value: '#fff'},
                {name: 'dark', value: '#333'},
                {name: 'purple', value: '#7d24a4'},
            ],
        }
    },
    tags: ['autodocs'],
};

export default meta;

export const Normal = () => {
    const [isDisable, setDisable] = useState(false);
    return (
        <Button
            name={'button'}
            onClick={() => {
            }}
            disabled={isDisable}/>
    )
}

export const Disabled = () => {
    const [isDisable, setDisable] = useState(true);
    return (
        <Button
            name={'button'}
            onClick={() => {
            }}
            disabled={isDisable}/>
    )
}

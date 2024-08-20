import type {Meta, StoryObj} from '@storybook/react';

import {ConfigureCount} from './ConfigureCount';
import {ChangeEvent, useState} from 'react';

const meta: Meta = {
    title: 'Stories/ConfigureCount',
    component: ConfigureCount,
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

type Story = StoryObj;

const defaultConfig = {
    maxValue: 5,
    startValue: 0,
}

export const Basic: Story = {

    render: () => {
        const [config, setConfig] = useState(defaultConfig);
        const [isChange, setIsChange] = useState(false);

        // changeHandler:
        const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setIsChange(true);
            const {name, value} = event.currentTarget;

            setConfig((prevConfig) => ({
                ...prevConfig,
                [name]: Number(value),
            }));
        };

        const setButtonHandler = () => {
            setIsChange(false);
        };

        return (
            <ConfigureCount
                defaultConfig={config}
                onChange={changeHandler}
                isChange={isChange}
                onSet={setButtonHandler}
            />
        )
    }
}

export const Incorrect: Story = {
    render: () => {
        const [config, setConfig] = useState({
            maxValue: 5,
            startValue: 5,
        });


        return (
            <ConfigureCount
                defaultConfig={config}
                onChange={() => {
                }}
                isChange={false}
                onSet={() => {
                }}
            />
        )
    }
}

export const Incorrect2 = {
    render: () => {
        const [config, setConfig] = useState({
            maxValue: -1,
            startValue: 0,
        });


        return (
            <ConfigureCount
                defaultConfig={config}
                onChange={() => {
                }}
                isChange={false}
                onSet={() => {
                }}
            />
        )
    }
}
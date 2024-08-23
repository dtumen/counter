import type {Meta} from '@storybook/react';

import Counter from './Counter';
import {CurrentValueType, ValuesConfigType} from '../../common/types/types';
import {useState} from 'react';

const meta = {
    title: 'Stories/Counter',
    component: Counter,
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
} satisfies Meta<typeof Counter>;

export default meta;

export const Default = () => {
    const [currentValue, setCurrentValue] = useState<CurrentValueType>(0);
    const [defaultConfig, setDefaultConfig] = useState<ValuesConfigType>({
        maxValue: 5,
        startValue: 0,
    })

    const [isChange, setIsChange] = useState(false);

    const increaseHandler = () => {
        setCurrentValue((prevValue) => {
            if (typeof prevValue === 'number') {
                return prevValue + 1;
            }

            return prevValue;
        })
    };

    const resetHandler = () => {
        if (typeof currentValue === 'number') {
            setCurrentValue(defaultConfig.startValue);
        }
    };

    return (
        <Counter
            currentValue={currentValue}
            defaultConfig={defaultConfig}
            isChange={isChange}
            onIncrease={increaseHandler}
            onReset={resetHandler}
        />
    )
}
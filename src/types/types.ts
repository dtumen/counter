export type ValuesConfigType = {
    maxValue: number
    startValue: number
};

export const INCORRECT_MESSAGE = 'Incorrect type';
export const PRESS_MESSAGE = 'Enter value and press "set"';

export type IncorrectType = typeof INCORRECT_MESSAGE;
export type PressSetType = typeof PRESS_MESSAGE;

export type CurrentValueType = number | IncorrectType | PressSetType;
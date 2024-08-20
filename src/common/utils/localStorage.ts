export const readFromLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const writeToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}
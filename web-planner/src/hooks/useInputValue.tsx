import { ChangeEvent, useState } from "react";

export const useInputValue = (initialValue: string) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputValue(e.target.value);
    };

    return [inputValue, onChange] as const;
};
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

export const useInputValue = (initialValue: string) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const onChange = (e: ChangeEvent<{input: string, value: string}>) => {
        setInputValue(e.target.value);
    };

    const onSubmitTask = async (e: any) => {
        e.preventDefault();
    };

    return [inputValue, onChange, onSubmitTask];
};
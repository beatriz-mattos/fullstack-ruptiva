import { ChangeEvent, FormEvent, useState } from "react";

export type InitialState = {
    [index: string]: string;
};

export const useForm = (initialState: InitialState) => {
    const [form, setForm] = useState(initialState);

    const onChangeInput = (e: ChangeEvent<{name?: string | undefined, value: string}>) => {
        const newValue = e.target.value;
        const fieldName = e.target.name;

        if (fieldName !== undefined) {
            setForm({ ...form, [fieldName]: newValue });
        }
    };

    const resetForm = () => {
        setForm(initialState);
    };

    const onSubmitApplication = async (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    return { form, onChangeInput, resetForm, onSubmitApplication };
};
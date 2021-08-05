import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Object>( initialState: T ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {

        setValues({
            ...values,
            [ target.name ]: target.value
            
        });
    }

    return {values, handleInputChange, reset};

}
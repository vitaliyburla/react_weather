import React, { useState } from 'react';

const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const reset = () => {
        setValue(null);
    };
    return {
        value,
        onChange: handleChange,
        reset,
    };
};

export default useInput;

import React, { useState } from 'react';

export default function Input({defaultValue, label, handleOnChange, index}) {
    const [value, setValue] = useState(defaultValue);

    function handleChange(value) {
        setValue(value);
        handleOnChange(index, value);
    }

    return (
        <div>
            <label>{label}</label>
            <input type="number" value={value} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}
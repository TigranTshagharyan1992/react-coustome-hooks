import React, {useState} from 'react';

export function UseInput (def){
    const [value,setValue] = useState(def);

    const onChange = event => {
        setValue(event.target.value);
    }
    return {
        value, onChange
    }
};

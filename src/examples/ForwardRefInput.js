import React, { forwardRef, useState } from 'react';


const ForwardRefInput = forwardRef(({ value, setValue }, ref) => {
    return (
        <div>
            <input ref={ref} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
    );
});

export default ForwardRefInput;
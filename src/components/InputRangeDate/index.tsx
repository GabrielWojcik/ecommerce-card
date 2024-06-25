import { DateRangePicker } from 'rsuite';
import { useState } from 'react';

interface IPropsDate {
    value?: any;
    onChange?: (value: any) => void;
}

export default function InputDateRange(props: IPropsDate) {
    const handleChange = (value: any) => {
        if (props.onChange) {
            props.onChange(value);
        }
    };

    return (
        <div>
            <DateRangePicker
            format="MM/dd/yyyy" character=" – "
            color='red'
            onChange={handleChange} />
        </div>
    );
}

'use client'
import SingleInputDateRangePicker from '@/src/components/InputRangeDate'
import { useState } from 'react';

export default function Promocoes() {
    const [selectedDates, setSelectedDates] = useState(null);

    const handleDateChange = (value: any) => {
        setSelectedDates(value);
        console.log('Selected Dates:', value); // Aqui você pode manipular as datas selecionadas como quiser
    };
    return(
        <div>
            <p>favoritos</p>
            <SingleInputDateRangePicker onChange={handleDateChange} />
            {selectedDates && (
                <div>
                    <p>Data inicial: {selectedDates[0]?.toString()}</p>
                    <p>Data final: {selectedDates[1]?.toString()}</p>
                </div>
            )}
        </div>
    )
}
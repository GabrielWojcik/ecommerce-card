import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function InputAutoComplete({ options, onSelect }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event, value) => {
    setSelectedValue(value);
    onSelect(value); // Chama a função onSelect passando o valor selecionado
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      value={selectedValue}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

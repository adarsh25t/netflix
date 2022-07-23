import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './selectbox.css'

export default function SelectBox({language}) {
  const [select, setSelect] = React.useState('0');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const lan = language.map((lan,index) => {
    return(
        <MenuItem value={index} style={{color:'white',background:'black'}}>{lan}</MenuItem>
    )
  })

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl >
        <Select
          value={select}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="select-box"
        >
        {lan}
        </Select>
      </FormControl>
    </Box>
  );
}

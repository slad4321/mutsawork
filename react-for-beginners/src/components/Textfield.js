import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function TextFieldHiddenLabel() {
  return (<div>
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="WRITE TO DO"
        variant="filled"
      />
    </Stack>
    </div>
  );
}
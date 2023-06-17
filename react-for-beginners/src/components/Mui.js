import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from "@emotion/styled";

const Button1 = styled.button`
    display: inline-black;
    border-radius: 10px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    color: green;
    background: white;
`;

export default function BasicButtons() {
  return (<div>
    <Stack spacing={2} direction="row" >
      <Button variant="contained" >ADD TO LIST</Button >
      <Button variant="outlined" >CONFIRM</Button>
    </Stack>
    <Button1>
        text
    </Button1>
    </div>
  );
}
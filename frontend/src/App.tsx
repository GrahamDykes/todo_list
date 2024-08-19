import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, ChakraProvider, Input } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [name, setName] = useState(" 3rd");
const onChange = (event: any ) =>{
  setName(event.target.value)
}

  const handleClick = async () =>{
    const response = await axios.post('http://localhost:3000/name', {name})
    console.log('response: \t', response)
  }

  
  return (
   <ChakraProvider>
    <Box m={10} display="flex" gap={4}>
    <Input onChange={onChange} placeholder='type in name'/>
    <Button onClick={handleClick}>Add Name</Button>
    </Box>
   </ChakraProvider>
  );
}

export default App;

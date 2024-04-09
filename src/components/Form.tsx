import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';


const MyForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: ''
  });

   // Handler to update form data when inputs change
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    // Do something with the form data, e.g., send it to the server
    console.log('Form submitted:', formData);

    alert('Form data submitted!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormLabel htmlFor="firstname"></FormLabel>
        <Stack 
        spacing={{ xs: 1, sm: 2,  }} direction="row" useFlexGap flexWrap="wrap" gap={2}>
        <TextField
          type="text"
          id="firstname"
          name="firstname"
          label= "FirstName"
          value={formData.firstname}
          onChange={handleInputChange}
          variant="filled"
          sx={{innerWidth:500, width:200}}
          />
        </Stack>
      </div>
      <div>
        <FormLabel htmlFor="lastname"></FormLabel>
        <TextField
          type="string"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
          label="LastName"
          variant="filled"
          sx={{innerWidth:500, width:200}}
        />
      </div>
      <Button 
      variant="contained"
      sx={{marginTop: 4, marginLeft: 0,
      }}
      type="submit">Submit</Button>
    </form>
  );
};

export default MyForm;

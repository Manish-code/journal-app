import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const AddEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newEntry = {
      title,
      content,
      date: new Date(),
    };

    try {
      const response = await axios.post('http://localhost:5000/entries/add', newEntry);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    setTitle('');
    setContent('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Add a New Journal Entry</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          fullWidth
          margin="normal"
          label="Title" 
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
          fullWidth
          margin="normal"
          label="Content" 
          variant="outlined"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button 
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Entry
        </Button>
      </form>
    </Container>
  );
};

export default AddEntry;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postSlice';
import { AppDispatch } from '../../app/store';
import { Box, Button, TextField, Typography } from '@mui/material';
import theme from '../../theme';

const AddPost = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPost({ name, description }));
    setName('');
    setDescription('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        maxWidth: 1000,
        mt: 4,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          inputProps={{
            style: {backgroundColor: theme.palette.background.default}
          }}
        />
        <TextField
          label="Descripción"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          required
          inputProps={{
            style: {backgroundColor: theme.palette.background.default}
          }}

        />

        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{minWidth: '15%'}}
        >
          Agregar post
        </Button>
      </Box>
    </Box>
  );
};

export default AddPost;


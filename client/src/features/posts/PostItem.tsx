import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, Post } from './postSlice';
import { AppDispatch } from '../../app/store';
import { TableRow, TableCell, Button } from '@mui/material';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <TableRow>
      <TableCell>{post.name}</TableCell>
      <TableCell>{post.description}</TableCell>
      <TableCell>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Eliminar 
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PostItem;


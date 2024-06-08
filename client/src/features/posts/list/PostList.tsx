import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, deletePost, Post } from '../postSlice';
import { RootState, AppDispatch } from '../../../app/store';
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { Button, Box, TextField } from '@mui/material';
import CustomDataGrid from './CustomDataGrid';
import theme from '../../../theme';

const PostList = () => {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const [searchQuery, setSearchQuery] = useState('');
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', flex: 2 },
    { field: 'description', headerName: 'Descripción', flex: 2 },
    {
      field: 'action',
      headerName: 'Acción',
      flex: 2,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(params.row.id)}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  const filteredPosts = posts.filter((post: Post) =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const rowHeight = 62; 
  const tableHeight = rowHeight * paginationModel.pageSize + 62; 

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ width: '40%', backgroundColor: theme.palette.background.default}}>
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>
      <Box sx={{ 
        width: '100%', 
        height: tableHeight, 
        backgroundColor: theme.palette.background.default
      }}>
        <CustomDataGrid
          columns={columns}
          rows={filteredPosts}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          disableRowSelectionOnClick
          pageSizeOptions={[5, 10, 20]}
          localeText={{ noRowsLabel: 'No se encontró ningún post'}}
        />
      </Box>
    </Box>
  );
};

export default PostList;


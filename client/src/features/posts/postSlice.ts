
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8081/posts';

export interface Post {
  id: number;
  name: string;
  description: string;
}

interface PostState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (post: Omit<Post, 'id'>) => {
  const response = await axios.post(API_URL, { post });
  return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
      });
  },
});

export default postSlice.reducer;

import React from 'react';
import AddPost from './features/posts/AddPost';
import PostList from './features/posts/list/PostList';
import './App.css';  // Import the CSS file

const App = () => {
  return (
    <div className="App">
        <PostList />
        <AddPost />
    </div>
  );
};

export default App;



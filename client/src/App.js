import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;

// axios.post('http://localhost:4000/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4001/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4002/events', event).catch((err) => {
//   console.log(err.message);
// });
// res.send({ status: 'OK' });

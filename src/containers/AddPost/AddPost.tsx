import React from 'react';
import { Fragment } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import axiosApi from '../../axiosApi.ts';

const AddPost: React.FC = () => {
  const addPost = (post: any) => {
    axiosApi.post('posts.json', post).then(() => {
    });
  };

  return (
    <Fragment>
      <h1>Add Post</h1>
      <PostForm submit={addPost} />
    </Fragment>
  );
};

export default AddPost;
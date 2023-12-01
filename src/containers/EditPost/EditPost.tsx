import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi.ts';
import PostForm from '../../components/PostForm/PostForm';

const EditPost: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axiosApi.get(`posts/${id}.json`).then((response) => {
        setPost(response.data);
      });
    }
  }, [id]);

  const editPost = (postData: any) => {
    axiosApi.put(`posts/${id}.json`, postData).then(() => {
      alert('Changes have been made');
      navigate('/posts');
    });
  };

  const postInfo = { ...(post || {}), id }; // Use an empty object as a default value

  return (
    <>
      <h1>Edit Post</h1>
      <PostForm {...postInfo} submit={editPost} />
    </>
  );
};

export default EditPost;
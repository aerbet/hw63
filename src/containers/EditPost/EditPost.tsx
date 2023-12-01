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
      axiosApi.get(`posts.json`).then((response) => {
        setPost(response.data);
      });
    }
  }, [id]);

  const editPost = (postData: any) => {
    if (!post) {
      alert('Post not found.');
      return;
    }

    if (!postData.title.trim() || !postData.description.trim()) {
      alert('Please fill in both title and description.');
      return;
    }

    const updatedPostData = { ...postData, id };

    axiosApi.put(`posts/${id}.json`, updatedPostData).then(() => {
      alert('Changes have been made');
      navigate('/posts');
    });
  };

  const postInfo = { ...(post || {}), id };

  return (
    <>
      <h1>Edit Post</h1>
      <PostForm {...postInfo} submit={editPost} />
    </>
  );
};

export default EditPost;
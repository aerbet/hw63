import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from '../../axios-instances';

interface Post {
  id: number;
  title: string;
  description: string;
}

const FullPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`posts/${id}.json`).then(response => {
      setPost(response.data);
    });
  }, [id]);

  const editHandler = (postId: number) => {
    navigate(`/posts/${postId}/edit`);
  };

  const deleteHandler = (postId: number) => {
    if (window.confirm('You really want to remove this post?')) {
      axios.delete(`posts/${postId}.json`).then(() => {
        alert('Пост удален !');
        navigate('/');
      });
    }
  };

  if (!post) return null;

  return (
    <div className={`item-${id}`}>
      <div className="jumbotron">
        <h1 className="display-3">{post.title}</h1>
        <hr className="my-2" />
        <p className="lead">{post.description}</p>
      </div>
      <p className="lead float-right">
        <Button color="primary" onClick={() => editHandler(post.id)}>
          Edit Post
        </Button>
        <Button color="danger" onClick={() => deleteHandler(post.id)}>
          Delete Post
        </Button>
      </p>
    </div>
  );
};

export default FullPost;
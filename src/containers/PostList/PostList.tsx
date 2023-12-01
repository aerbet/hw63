import React, { useState, useEffect, Fragment } from 'react';
import ShortPost from '../../components/Post/ShortPost';
import axiosApi from '../../axiosApi.ts';
import { useNavigate } from 'react-router-dom';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosApi.get('posts.json').then((response) => {
      const postsData = Object.keys(response.data).map((id) => ({
        ...response.data[id],
        id,
      }));
      setPosts(postsData);
    });
  }, []);

  const readHandler = (id: string) => {
    navigate(`/posts/${id}`);
  };

  return (
    <Fragment>
      {posts.map((post) => (
        <ShortPost
          key={post.id}
          title={post.title}
          description={post.description}
          readClicked={() => readHandler(post.id)}
        />
      ))}
    </Fragment>
  );
};

export default PostList;
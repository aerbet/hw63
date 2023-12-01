import React, { useEffect, useState, Fragment } from 'react';
import ShortPost from '../../components/Post/ShortPost';
import axiosApi from '../../axiosApi.ts';
import { useNavigate } from 'react-router-dom';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosApi.get('posts.json')
      .then(response => {
        const postsData = response.data ? Object.keys(response.data).map(id => ({
          ...response.data[id],
          id,
        })) : [];
        setPosts(postsData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const readHandler = (id: string) => {
    navigate(`/posts/${id}`);
  };

  return (
    <Fragment>
      <div className="topbar">
        {posts.map((post) => (
          <ShortPost
            key={post.id}
            title={post.title}
            description={post.description}
            readClicked={() => readHandler(post.id)}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default PostList;
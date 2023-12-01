import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/Header/Header';
import AddPost from './containers/AddPost/AddPost';
import PostList from './containers/PostList/PostList';
import FullPost from './components/Post/FullPost';
import EditPost from './containers/EditPost/EditPost';
import Contact from './components/Contacts/Contacts';
import About from './components/About/About';

import './App.css';

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/add" element={<AddPost />} />
            <Route path="/posts/:id" element={<FullPost />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
  );
};

export default App
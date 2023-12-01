import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import FullPost from './components/Post/FullPost';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Container>
          <Routes>
            <Route path="/posts/:id" element={<FullPost />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App
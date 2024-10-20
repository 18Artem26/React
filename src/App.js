import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';  
import Login from './Login';
import Profile from './Profile';
import News from './News';
import AuthGuard from './AuthGuard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={
          <AuthGuard>
            <Profile />
          </AuthGuard>
        } />
      </Routes>
    </Router>
  );
}

export default App;

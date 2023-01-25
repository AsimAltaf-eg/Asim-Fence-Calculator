import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NewPage from './Screens/NewPage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;

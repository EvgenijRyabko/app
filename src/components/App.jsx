import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from '../pages/Greeting';
import MainQuiz from '../pages/MainQuiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/quiz" element={<MainQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}
//Пиздец тебе Серёга
export default App;

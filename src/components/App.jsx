import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from '../pages/Greeting/Greeting';
import MainQuiz from '../pages/MainQuiz/MainQuiz';
import Result from '../pages/Result/Result';

function App() {
	const [answers, setAnswers] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Greeting />} />
				<Route path="/quiz" element={<MainQuiz answers={answers} setAnswers={setAnswers} />} />
				<Route path="/result" element={<Result answers={answers} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

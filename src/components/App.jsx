import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from '../pages/Greeting/Greeting';
import MainQuiz from '../pages/MainQuiz/MainQuiz';
import Result from '../pages/Result/Result';

function App() {
	const [answers, setAnswers] = useState([]);
	const [lang, setLang] = useState('uk');

	return (
		<BrowserRouter>
			<select className="absolute bg-transparent min-w-[100px] z-[9999] left-0 bottom-0" onChange={(e) => setLang(e.target.value)}>
				<option value={'uk'}>uk</option>
				<option value={'ru'}>ru</option>
				<option value={'en'}>en</option>
			</select>
			<Routes>
				<Route path="/" element={<Greeting lang={lang} />} />
				<Route path="/quiz" element={<MainQuiz lang={lang} answers={answers} setAnswers={setAnswers} />} />
				<Route path="/result" element={<Result lang={lang} answers={answers} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

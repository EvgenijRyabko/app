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
			<div className="absolute place-self-end" onChange={(e) => setLang(e.target.value)}>
				<select className='hover:border-gray-400 focus:outline-none'>
					<option value={'uk'}>&nbsp;🇺🇦</option>
					<option value={'en'}>&nbsp;🇬🇧</option>
					<option value={'ru'}>&nbsp;🇷🇺</option>
				</select>
			</div>
			
			<Routes>
				<Route path="/" element={<Greeting lang={lang} />} />
				<Route path="/quiz" element={<MainQuiz lang={lang} answers={answers} setAnswers={setAnswers} />} />
				<Route path="/result" element={<Result lang={lang} answers={answers} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

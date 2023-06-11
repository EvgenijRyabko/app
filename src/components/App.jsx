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
			<div className="absolute bg-transparent min-w-[120px] z-[9999] left-2 bottom-1" onChange={(e) => setLang(e.target.value)}>
				<select className='bg-transparent w-[90px]'>
					<option value={'uk'}>🇺🇦</option>
					<option value={'en'}>🇬🇧</option>
					<option value={'ru'}>🇷🇺</option>
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

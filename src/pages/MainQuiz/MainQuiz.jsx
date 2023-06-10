import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import data from '../../data/questions';
import { useNavigate } from 'react-router-dom';
import homeImg from '../../assets/Home.svg';
import classes from './MainQuiz.module.css';

function MainQuiz({ lang, answers, setAnswers = (f) => f }) {
	const navigate = useNavigate();
	const [obj, setObj] = useState();
	const [curr, setCurr] = useState();
	const [pageText, setPageText] = useState();

	useEffect(() => {
		setCurr(0);
		const res = data.find((el, id) => id === 0);

		setObj(res);
	}, []);

	useEffect(() => {
		const res = data.find((el, id) => id === curr);

		setObj(res);
	}, [curr, answers]);

	const onSelect = (id) => {
		if (answers.find((el) => el.question === curr))
			setAnswers(answers.map((el) => (el.question === curr ? { ...el, answer: id } : el)));
		else setAnswers([...answers, { question: curr, answer: id }]);

		if (curr !== data.length - 1) setCurr(curr + 1);
		else navigate('/result');
	};

	const onNextClick = () => {
		if (answers.find((el) => el.question === curr)) {
			if (curr !== data.length - 1)
				setCurr(curr + 1);
		}
	}

	return (
		<div className={classes.container}>
			<div className={classes.head}>
				<button
					className={classes.returnButton}
					type="button"
					onClick={() => navigate('/')}
				>
					<div className='grid w-full place-self-center border-2 border-white rounded-md bg-[#43c2c3]'>
						<img className='w-full' src={homeImg} alt='none' />
					</div>
					<p className='place-self-center'>НА ГОЛОВНУ</p>
				</button>
			</div>
			<div className={classes.content}>
				<div className={classes.quiz}>
					<h3 className={classes.question}>
						{obj?.question}
					</h3>
					<ul className={classes.options}>
						{obj?.choices.map((el, id) => (
							<li key={id} className={
								answers.find((answer) => answer.question === curr)?.answer === el.id
									? id === 0 ? 'justify-self-end border-[3px] border-green-400 w-full rotate-[-10deg]' : 'justify-self-start border-[3px] border-green-400 min-w-full rotate-[5deg]'
									: id === 0 ? 'justify-self-end border-[3px] min-w-full rotate-[-10deg]' : 'justify-self-start border-[3px] min-w-full rotate-[5deg]'}>
								<div className='mb-0 m-2'>
									<img src={el.img} alt='image' className='object-cover h-full' />
								</div>
								<div className='grid'>
									<p className='text-xs font-semibold text-center text-transparent justify-self-center place-self-center bg-clip-text bg-gradient-to-tr from-[#5ef5ce] to-[#4ab6ea]'>{el.choice}</p>
								</div>
								<button
									type='button'
									onClick={() => {
										onSelect(el.id);
									}}
									className='absolute w-[90%] h-full'
								>
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className='flex w-full h-min justify-around'>
					<button className={curr > 0 ? "" : "text-slate-600"} onClick={() => { if (curr >= 1) setCurr(curr - 1); }}>{"<-"}</button>
					<button className={
						answers.find((answer) => answer.question === curr)
							? ""
							: "text-slate-600"
					} onClick={onNextClick}>{"->"}</button>
				</div>
				<HelmetProvider>
					<Helmet title="Тест" />
				</HelmetProvider>
			</div>
		</div>

	);
}

export default MainQuiz;

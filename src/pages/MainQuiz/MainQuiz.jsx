import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import data from '../../data/questions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import classes from './MainQuiz.module.css';


function MainQuiz({ answers, setAnswers = (f) => f }) {
	const navigate = useNavigate();
	const [obj, setObj] = useState();
	const [curr, setCurr] = useState();

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
				>На головну</button>
			</div>
			<div className={classes.content}>
				<div className={classes.quiz}>
					<h3 className={classes.question}>
						{obj?.question}
					</h3>
					<ul className={classes.options}>
						{obj?.choices.map((el, id) => (
							<li key={id}>
								<button
									type='button'
									onClick={() => {
										onSelect(el.id);
									}}
									className={
										answers.find((answer) => answer.question === curr)?.answer === el.id
											? "border-2 border-green-400 w-[500px]"
											: "border-2 w-[500px]"}
								>
									{el.choice}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className='flex w-full justify-around'>
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

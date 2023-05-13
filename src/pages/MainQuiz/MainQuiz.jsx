import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import data from '../../data/questions.json';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import classes from './MainQuiz.module.css';


function MainQuiz({ answers, setAnswers = (f) => f }) {
	const navigate = useNavigate();
	const [obj, setObj] = useState();
	const [curr, setCurr] = useState();
	// const [answers, setAnswers] = useState([]);

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
	};

	const onFinish = () => {
		try {
			if (answers.length < data.length) throw "Finish all questions first!";
			else navigate("/result");
		} catch (error) {
			Swal.fire("", error, "error");
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
						{obj?.choices.map((choice, choiceId) => (
							<li key={choiceId}>
								<button
									type='button'
									onClick={() => {
										onSelect(choiceId);
									}}
									className={
										answers.find((el) => el.question === curr)?.answer === choiceId
											? "border-2 border-green-400 w-[500px]"
											: "border-2 w-[500px]"}
								>
									{choice}
								</button>
							</li>
						))}
					</ul>
					{
						curr === data.length - 1
							? <button type='button' onClick={onFinish}>Закончить тест</button>
							: <></>
					}
				</div>
				<ReactPaginate
					className={classes.paginate}
					pageClassName={classes.paginatePage}
					nextClassName={classes.paginateNext}
					previousClassName={classes.paginatePrevious}
					activeClassName={classes.paginateActive}
					onPageChange={(e) => setCurr(e.selected)}
					pageCount={data.length}
					pageRangeDisplayed={data.length}
					nextLabel=">"
					previousLabel="<"
					renderOnZeroPageCount={null}
				/>
				<HelmetProvider>
					<Helmet title="Тест" />
				</HelmetProvider>
			</div>
		</div>

	);
}

export default MainQuiz;

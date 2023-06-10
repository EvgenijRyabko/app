import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import classes from './Greeting.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

function Greeting({ lang }) {
	const navigate = useNavigate();
	const [pageText, setPageText] = useState({
		header: 'Тест на виявлення профорієнтації',
		button: 'Почати тест!',
	})

	useEffect(() => {
		switch (lang) {
			case 'ru':
				setPageText({
					header: 'Тест на определение профориентации',
					button: 'Начать тест!'
				});
				break;
			case 'uk':
				setPageText({
					header: 'Тест на виявлення профорієнтації',
					button: 'Почати тест!'
				});
				break;
			case 'en':
				setPageText({
					header: 'Career Guidance Test',
					button: 'Start test!'
				});
				break;
			default:
				break;
		}
	}, [lang]);

	return (
		<div className={classes.container}>
			<div className={classes.background}>
				<div className={classes.content}>
					<h3 className={classes.head}>{pageText.header}</h3>
					<button
						className={classes.button}
						type="button"
						onClick={() => navigate('/quiz')}
					>
						{pageText.button}
					</button>
					<HelmetProvider>
						<Helmet title="Augur" />
					</HelmetProvider>
				</div>
			</div>
		</div>
	);
}

export default Greeting;

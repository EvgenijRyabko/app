import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import classes from './Greeting.module.css';

function Greeting() {
	const navigate = useNavigate();

	return (
		<div className={classes.container}>
			<div className={classes.background}>
				<div className={classes.content}>
					<h3 className={classes.head}>Hello</h3>
					<button
						className={classes.button}
						type="button"
						onClick={() => navigate('/quiz')}
					>
						Начать тест!
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

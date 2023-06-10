import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import questions from '../../data/questions.json';
import results from '../../data/results.js';
import ResultElement from '../../components/ResultElement';
import humanitarianLogo from '../../assets/humanitarianLogo.png';

function Result({ answers, lang }) {
	const navigate = useNavigate();
	const [categories, setCategories] = useState({
		eng: 0,
		prog: 0,
		hum: 0,
		art: 0
	});
	const [res, setRes] = useState();
	const [pageData, setPageData] = useState({
		background: '',
		image: '',
		button: '',
		title: '',
		text: '',
	});

	useEffect(() => {
		if (answers.length !== questions.length) navigate("/quiz"); // Если ответов меньше, чем вопросов => перемещает обратно на тест

		(() => {
			for (let i = 0; i < answers.length; i++) {
				switch (answers[i].answer) {
					case 1:
						setCategories({ ...categories, eng: ++categories.eng });
						break;
					case 2:
						setCategories({ ...categories, prog: ++categories.prog });
						break;
					case 3:
						setCategories({ ...categories, hum: ++categories.hum });
						break;
					case 4:
						setCategories({ ...categories, art: ++categories.art });
						break;
					default:
						break;
				}
			}
		})();

		const result = [
			{ name: "eng", value: categories.eng },
			{ name: "prog", value: categories.prog },
			{ name: "hum", value: categories.hum },
			{ name: "art", value: categories.art }
		].sort((a, b) => b.value - a.value)[0];

		setRes(result);
	}, [lang]);

	useEffect(() => {
		if (res) {
			const pageInfo = results.find(el => el.category === res.name);

			switch (lang) {
				case 'ru':
					setPageData({
						background: pageInfo.background,
						image: pageInfo.image,
						title: pageInfo.ru.title,
						text: pageInfo.ru.text,
						button: pageInfo.ru.button
					});
					break;
				case 'uk':
					setPageData({
						background: pageInfo.background,
						image: pageInfo.image,
						title: pageInfo.uk.title,
						text: pageInfo.uk.text,
						button: pageInfo.uk.button
					});
					break;
				case 'en':
					setPageData({
						background: pageInfo.background,
						image: pageInfo.image,
						title: pageInfo.en.title,
						text: pageInfo.en.text,
						button: pageInfo.en.button
					});
					break;
				default:
					break;
			}
		}
	}, [res]);


	return (
		<div className="min-h-screen w-full">
			{
				(() => {
					if (!res?.name) return <></>;

					switch (res?.name) {
						case "eng":
							return <ResultElement
								background={pageData.background}
								image={pageData.image}
								title={pageData.title}
								text={pageData.text}
								lang={lang}
							/>;
						case "prog":
							return <ResultElement
								background={pageData.background}
								image={pageData.image}
								title={pageData.title}
								text={pageData.text}
								lang={lang}
							/>;
						case "hum":
							return <ResultElement
								background={pageData.background}
								image={pageData.image}
								title={pageData.title}
								text={pageData.text}
								lang={lang}
							/>;
						case "art":
							return <ResultElement
								background={pageData.background}
								image={pageData.image}
								title={pageData.title}
								text={pageData.text}
								lang={lang}
							/>;
						default:
							return <></>
					}
				})()
			}
			<HelmetProvider>
				<Helmet title="Augur" />
			</HelmetProvider>
		</div>
	);
}

export default Result;
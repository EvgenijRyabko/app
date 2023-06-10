import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import engineerBG from '../../assets/engineerBG.avif';
import programmerBG from '../../assets/programmerBG.avif';
import data from '../../data/questions.json';
import Swal from "sweetalert2";
import ResultElement from '../../components/ResultElement';

function Result({ answers }) {
	const navigate = useNavigate();
	const [categories, setCategories] = useState({
		eng: 0,
		prog: 0,
		hum: 0,
		art: 0
	});
	const [res, setRes] = useState();

	useEffect(() => {
		if (answers.length !== data.length) navigate("/quiz"); // Если ответов меньше, чем вопросов => перемещает обратно на тест

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
	}, []);

	console.log(categories);

	return (
		<div className="min-h-screen w-full">
			{
				(() => {
					if (!res?.name) return <></>;

					switch (res?.name) {
						case "eng":
							return <ResultElement
								background={`https://img.freepik.com/free-vector/colorful-design-science-education_23-2148484343.jpg?w=1800&t=st=1686404415~exp=1686405015~hmac=6410b6e477d235a1d38b6768452e727ff5eadbab5fd617acebd81f8567db7851`}
								image={`https://img.freepik.com/free-vector/science-concept-scientist-in-laboratory-experiment-research-biology-chemistry-physics-knowledge_513217-121.jpg?w=1800&t=st=1686354429~exp=1686355029~hmac=6e94ff6d295b34ee0cf81dee4b256b8088eff3434afbfd230b80295cfb1e2521`}
								title={`Заголовок`}
								text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit dolorum, veniam ducimus facilis aliquam harum aperiam nesciunt. Iusto est dicta magni perferendis cumque error atque esse quia harum eligendi.`}
							/>;
						case "prog":
							return <ResultElement
								background={`https://img.freepik.com/free-vector/binary-code-white-background-with-floating-numbers_1017-25331.jpg?w=1800&t=st=1686354673~exp=1686355273~hmac=0df5a897f643dda31f6aef5d772b30b6b5fb7eb38efcfb4b8bad63f70e830b93`}
								image={`https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?w=1380&t=st=1686354621~exp=1686355221~hmac=7c5a619ec766fa889850cb65371ea8a8ea7c5c8e25682d159d9ec2d994d4b07e`}
								title={`Заголовок`}
								text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit dolorum, veniam ducimus facilis aliquam harum aperiam nesciunt. Iusto est dicta magni perferendis cumque error atque esse quia harum eligendi.`}
							/>;
						case "hum":
							return <ResultElement
								background={`https://img.freepik.com/free-vector/beautiful-book-club-pattern-illustration_23-2149314748.jpg?w=1380&t=st=1686409944~exp=1686410544~hmac=560f589cf7db0138fad8ffccab61711e9bcfd66d672541a006901ebcd4921aa6`}
								image={`https://img.freepik.com/free-vector/tiny-screenwriter-sitting-on-retro-typewriter-thinking-screenplay-while-paper-drafts-flying-around-author_74855-14178.jpg?w=1800&t=st=1686354809~exp=1686355409~hmac=a6726f089f058447daed5413f6cc466217657a76fcc7554f0880027c718a8ce9`}
								title={`Заголовок`}
								text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit dolorum, veniam ducimus facilis aliquam harum aperiam nesciunt. Iusto est dicta magni perferendis cumque error atque esse quia harum eligendi.`}
							/>;
						case "art":
							return <ResultElement
								background={`https://img.freepik.com/free-vector/hand-drawn-world-art-day-background_23-2149332776.jpg?w=1800&t=st=1686410032~exp=1686410632~hmac=31ee03400a30e8fbc4fdfe1776fa303e57064a0fb8fc54e21d2cede1ff2fec98`}
								image={`https://img.freepik.com/free-vector/smiling-woman-standing-near-easel-and-painting-flat-illustration_74855-11057.jpg?w=1800&t=st=1686354901~exp=1686355501~hmac=e82f48bdd337ddab8eb093bd4c973cda1306817671fb453b8620cda1dc57bbac`}
								title={`Заголовок`}
								text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit dolorum, veniam ducimus facilis aliquam harum aperiam nesciunt. Iusto est dicta magni perferendis cumque error atque esse quia harum eligendi.`}
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
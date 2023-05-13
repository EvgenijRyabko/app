import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from '../../data/questions.json';
import Swal from "sweetalert2";

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
		<div className="bg-[#5a1372f3] h-screen w-full">
			{
				(() => {
					if (!res?.name) return <></>;

					switch (res?.name) {
						case "eng":
							return <div>Engineer</div>;
						case "prog":
							return <div>Programmer</div>;
						case "hum":
							return <div>Hummanitarian</div>;
						case "art":
							return <div>Clown</div>;
						default:
							return <></>
					}
				})()
			}
		</div>
	);
}

export default Result;
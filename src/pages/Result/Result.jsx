import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Result({ answers }) {
	const navigate = useNavigate();

	useEffect(() => {
		if (!answers.length) navigate("/quiz");
	}, []);

	return (
		<div className="bg-[#5a1372f3] h-screen w-full">
			<h3>Result:</h3>
			<p>You're dumb</p>
		</div>
	);
}

export default Result;
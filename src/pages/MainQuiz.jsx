import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import data from '../data/questions.json';
import { useNavigate } from 'react-router-dom';


function MainQuiz() {
  const navigate = useNavigate();
  const [obj, setObj] = useState();
  const [curr, setCurr] = useState();
  const [answers, setAnswers] = useState([]);

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

  return (
    <div className='grid grid-rows-[2fr_12fr] h-screen'>
      <div className='bg-[#5a1372f3] grid'>
        <button
          className="border-2 border-slate-400 w-[350px] h-3/6 m-4"
          type="button"
          onClick={() => navigate('/')}
        >На головну</button>
      </div>
      <div className="grid grid-rows-[8fr_2fr] w-full bg-[#680689fd]">
      <div className="grid grid-rows-[3fr_7fr] w-full h-full">
        <h3 className="text-[calc(24px+1vw)] justify-self-center place-self-center">
          {obj?.question}
        </h3>
        <ul className="grid text-[calc(12px+1vw)]">
          {obj?.choices.map((choice, choiceId) => (
            <li className="grid h-[calc(50px+1vw)] justify-center" key={choiceId}>
              {answers.find((el) => el.question === curr)?.answer === choiceId ? (
                <button
                  className="border-2 w-[500px] border-green-400"
                  type="button"
                  onClick={() => {
                    onSelect(choiceId);
                  }}
                >
                  {choice}
                </button>
              ) : (
                <button
                  className="border-2 w-[500px]"
                  type="button"
                  onClick={() => {
                    onSelect(choiceId);
                  }}
                >
                  {choice}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <ReactPaginate
        className="flex w-full h-min place-self-center justify-center p-4 text-slate-600 text-[calc(12px+1vw)] font-semibold"
        pageClassName="font-semibold px-2"
        nextClassName="px-4"
        previousClassName="px-4"
        activeClassName="text-amber-600 font-bold"
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

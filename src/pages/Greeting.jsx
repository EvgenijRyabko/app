import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function Greeting() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-rows-[4fr_6fr] h-screen w-full">
      <h3 className="text-[calc(24px+1vw)] justify-self-center place-self-center">Hello</h3>
      <button
        className="border-2 border-slate-600 min-w-[500px] min-h-[50px] w-1/6 h-1/6 text-[calc(12px+1vw)] justify-self-center place-self-center"
        type="button"
        onClick={() => navigate('/quiz')}
      >
        Начать тест!
      </button>
      <HelmetProvider>
        <Helmet title="Начало" />
      </HelmetProvider>
    </div>
  );
}

export default Greeting;

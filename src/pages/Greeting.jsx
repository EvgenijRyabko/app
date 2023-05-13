import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function Greeting() {
  const navigate = useNavigate();
  
  return (
    <div className="grid cover bg-[#101010]">
      <div className="bg-[url('https://www.vergesense.com/hubfs/Imported_Blog_Media/a64a7af4-6598-4a48-b0b9-cc645b7f7fd5_AdobeStock_302113529.png')] bg-cover grid grid-rows-[4fr_6fr] h-screen w-5/6 place-self-center brightness-[0.4] parent"></div>
      <div className='grid grid-rows-[4fr_6fr] w-screen h-1/6 bg-black'></div>
      <div className='grid grid-rows-[4fr_6fr] h-screen w-5/6 place-self-center brightness-[1]'> {/*если тут убрать параметр brightness то текст и кнопка тупо исчезают*/}
          <h3 className=" justify-self-center place-self-center">Hello</h3>
          <button
            className="border-2 border-slate-300 min-w-[500px] min-h-[50px] w-1/6 h-1/6 text-[calc(12px+1vw)] justify-self-center place-self-center"
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
  );
}

export default Greeting;

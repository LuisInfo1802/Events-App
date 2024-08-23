import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function CardsEvents({ event }) {
  const navigate = useNavigate();

 

  return (
    <>
    
    <div >
      <img
        className="w-[380px] h-[206px] rounded"
        src={event.img}
        alt={`Image of ${event.idBand}`}
      />
      <p className="text-center text-white text-4xl mt-6">{event.idBand}</p>
      <p className="text-center text-white text-2xl">{event.description}</p>
      <p className="text-center text-white text-2xl mt-4">{event.city}</p>
      <p className="text-center text-white text-2xl mt-5">{event.date}</p>
    </div>
   
    </>
  );
}

export default CardsEvents;

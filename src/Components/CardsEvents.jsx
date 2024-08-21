


function CardsEvents({event}) {
  return (
    <>
      
     
      <img
            className="w-[380px] h-[206px] rounded"
            src={event.img}
          ></img>

          <p className="text-center text-white text-4xl  mt-6">{event.idBand}</p>
          <p className="text-center text-white text-2xl">{event.description}</p>
          <p className="text-center text-white text-2xl mt-4">{event.city}</p>
          <p className="text-center text-white text-2xl mt-5">
            {event.date}
          </p>
          
         
      
    </>
  );
}

export default CardsEvents;

import { useContext } from "react";
import { EventContext } from "../Context/EventsContect";
import CardsArtist from "./CardsArtist";

function CardsList() {
  const { bands } = useContext(EventContext);
  if (bands.length === 0) {
    return <h1>No hay eventos proximos!</h1>;
  }
  return (
    <>
      <p className="text-center text-white text-5xl font-bold mt-10">
        Sobre nuestros artistas..
      </p>

      <div className="flex  flex-col  sm:flex-row sm:justify-center rounded w-full h-screenpx-10 pt-5 text-white ">
        {bands.slice(0,3).map((banda) => (
          <div key={banda.id} className="relative  max-w-sm sm:mr-10 mt-24 hover:scale-110 transition duration-200 ">
            <div className="rounded overflow-hidden shadow-md bg-gray-700">
              <CardsArtist key={banda.id} banda={banda}></CardsArtist>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsList;

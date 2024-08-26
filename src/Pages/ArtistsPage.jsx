import { useContext, useState } from "react";
import { EventContext } from "../Context/EventsContect";
import CardsArtist from "../Components/CardsArtist";
import SearchBar from '../Components/SearchBar';

function ArtistsPage() {
  const { bands } = useContext(EventContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra las bandas basadas en el término de búsqueda
  const filteredBands = bands.filter((banda) =>
    banda.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (bands.length === 0) {
    return <h1>No hay eventos proximos!</h1>;
  }

  return (
    <>
      <p className="text-center text-white text-5xl font-bold mt-10">
        Nuestros Artistas
      </p>
      <SearchBar onSearch={setSearchTerm} /> {/* Pasa la función setSearchTerm como prop */}
      <div className="flex flex-wrap justify-center px-10 pt-5 text-white">
        {filteredBands.length > 0 ? (
          filteredBands.map((banda) => (
            <div
              key={banda.id}
              className="relative w-full max-w-sm m-4 hover:scale-110 transition duration-200"
            >
              <div className="rounded overflow-hidden shadow-md bg-gray-700 mt-10">
                <CardsArtist key={banda.id} banda={banda} />
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center text-white text-3xl font-bold mt-10">
            No se encontraron artistas
          </h2>
        )}
      </div>
    </>
  );
}

export default ArtistsPage;

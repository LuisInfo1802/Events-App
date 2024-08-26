function SearchBar({ onSearch }) {
    return (
      <div className="mt-16 mb-16 flex w-full justify-center items-center">
        <div className="flex relative rounded-md w-full px-4 max-w-xl">
          <input
            type="text"
            name="q"
            id="query"
            placeholder="Coloca el nombre del artista"
            className="w-full p-3 rounded-md border-2 border-r-white rounded-r-white border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500 dark:text-gray-300 dark:border-none"
            onChange={(e) => onSearch(e.target.value)} // Llama a la función onSearch al cambiar el input
          />
          
        </div>
      </div>
    );
  }
  
  export default SearchBar;
  
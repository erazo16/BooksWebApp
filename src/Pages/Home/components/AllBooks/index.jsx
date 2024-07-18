import React from "react";
import { CardsBooks } from "../../../../components/shared/cardsBooks";
import { useDispatch } from "react-redux";
import { addBookList,  updateSearchTitle, updateGenre} from "../../../../redux/books/booksSlice";
import { EmptyComponent } from "../../../../components/shared/empty";

export const AllBooks = ({ data }) => {
    const dispatch = useDispatch()

    const handleSearchChange = (event) => {
      dispatch(updateSearchTitle(event.target.value));
    };
  
    const handleGenreChange = (event) => {
      dispatch(updateGenre(event.target.value));
    };

      const addBookToList = (id) => {
        dispatch(addBookList(id))
      }


  return (
    <div className="px-8 pb-5">
      <div className="grid gap-5 lg:grid-cols-3">
        <h2 className="font-bold text-cyan-950">Libros Disponibles</h2>

        <input
          type="text"
          className="block rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Buscar libros..."
          onChange={handleSearchChange}
        />

        <div
          className="flex items-center gap-3"
        >
          <span>Filtrar</span>
          <select 
          onChange={handleGenreChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="">Selecciona género...</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>
        </div>
      </div>

      {data.length <= 0 ? (
        <EmptyComponent text="No se encontraron libros" /> 
      ) : (
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        {data && data?.map((item, index) => <CardsBooks data={item} addBookToList={addBookToList} list={false} />)}
      </div>

      )}

    </div>
  );
};

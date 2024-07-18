import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getBooks } from '../../helpers/api'
import Header from '../../components/header'
import { AllBooks } from './components/AllBooks'
import { useDispatch, useSelector } from 'react-redux'
import { setBooksAll } from '../../redux/books/booksSlice'
import ListBookPreview from './components/listBookPreview'

const Home = () => {

    // Llamada para ejecutar la acción de guardar datos de libro en un estado
    const dispatch = useDispatch()
    //llamada selector para acceder al estado de todos los libros
    const {filteredBooks, bookList} = useSelector((state) => state.books)

    const { data: listBooks } = useQuery({
        queryKey : ["listBooks"],
        queryFn : ()=> getBooks()
    })

    const booksLocal = localStorage.getItem("allBooks")


    //valida si listBooks viene con datos, ya que ejecuta el segmento setBooksAll para guardar
    useEffect(() => {
      if (listBooks && !booksLocal ) {
        dispatch(setBooksAll(listBooks?.library))
      }
    }, [listBooks, dispatch, booksLocal])
    

  return (
    <React.Fragment>
        <Header />
        {bookList.length > 0 &&
          <ListBookPreview />
        }
        <AllBooks data={filteredBooks} />
    </React.Fragment>
  )
}

export default Home
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EmptyComponent } from '../../components/shared/empty'
import { useNavigate } from 'react-router-dom'
import { CardsBooks } from '../../components/shared/cardsBooks'
import { deleteBookList } from '../../redux/books/booksSlice'

const ListBooks = () => {
  const dispatch = useDispatch()

  const deleteBook = (id) => {
    dispatch(deleteBookList(id))
  }


  const navigate = useNavigate()

  const linkTo = () => navigate("/")

  const { bookList } = useSelector(state => state.books)

  return (
    <div className='px-8 text-center'>
        <h1 className='font-bold'>Tú lista de lectura</h1>

        <h2 className='mt-5'>Aquí podrás encontrar los libros que has agregado a tu lista de lectura. ¡Buena Lectura!🚀</h2>

        <div>
          {bookList.length <= 0 ? (
            <EmptyComponent text="Aun no has agregado libros :c" show={true} textButton="Agregar libros" redirect={linkTo} />
          ) : (
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {bookList && bookList?.map((item, index) => <CardsBooks data={item} list={true} deleteBookList={deleteBook} />)}
            </div>
          )

          }
        </div>
    </div>
  )
}

export default ListBooks
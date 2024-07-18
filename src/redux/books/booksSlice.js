import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const stateLocal = localStorage.getItem("allBooks");
    if (stateLocal === null) {
      return [];
    }
    return JSON.parse(stateLocal);
  } catch (error) {
    return [];
  }
};

const saveBooks = (state) => {
  try {
    const stateLocal = JSON.stringify(state);
    localStorage.setItem("allBooks", stateLocal);
  } catch (error) {}
};

const saveListBooks = (state) => {
  try {
    const stateLocal = JSON.stringify(state);
    localStorage.setItem("bookList", stateLocal);
  } catch (error) {}
};

const initialState = {
  books: loadState(),
  filteredBooks: loadState(),
  bookList: JSON.parse(localStorage.getItem("bookList")) || [],
  selectedGenre: "",
  searchTitle: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {

    //Guarda los datos de payload en un estado y los almacena en un localStorage
    setBooksAll(state, action) {
      state.books = action.payload;
      state.filteredBooks = state.books;
      saveBooks(state.filteredBooks);
    },
    addField(state, action) {
      const book = state.find((book) => book.id === action.payload.id);
      if (book) {
        book.add = action.payload.add;
      }
      saveBooks(state.filteredBooks);
    },
    //Reducer para recibir un titulo y enviarlos a funcion para filtrar
    updateSearchTitle(state, action) {
      state.searchTitle = action.payload;
      state.filteredBooks = applyFilters(state);
    },
    //Reducer para recibir un geneo y enviarlos a funcion para filtrar
    updateGenre(state, action) {
      state.selectedGenre = action.payload;
      state.filteredBooks = applyFilters(state);
    },
    //Reducer para omitir dato dependiendo su id del state filteredBook y agregarlo a un nuevo state BookList
    addBookList(state, action) {
      const id = action.payload;
      const selectBook = state.filteredBooks.find(
        (item) => item?.book["ISBN"] === id
      );
      const filterBooks = state.filteredBooks.filter(
        (ele) => ele?.book["ISBN"] !== id
      );

      if (selectBook) {
        state.bookList.push(selectBook);
      }

      state.filteredBooks = filterBooks;

      saveBooks(filterBooks);
      saveListBooks(state.bookList);
    },
    deleteBookList(state, action) {
        const id = action.payload;
        const selectBook = state.bookList.find( (item) => item?.book["ISBN"] === id);
        const filterBooks = state.bookList.filter(
            (ele) => ele?.book["ISBN"] !== id
          );

        if (selectBook) {
            state.filteredBooks.push(selectBook)
        }

        state.bookList = filterBooks

        saveBooks(state.filteredBooks)
        saveListBooks(filterBooks)
    }
  },
});

//Funcion para filtar los datos por titulo o genero
const applyFilters = (state) => {
  return state.books.filter((book) => {
    const findTitle = book?.book["title"]
      .toLowerCase()
      .includes(state.searchTitle.toLowerCase());
    const findGenre = book?.book["genre"]
      .toLowerCase()
      .includes(state.selectedGenre.toLowerCase());
    return findTitle && findGenre;
  });
};

export const {
  setBooksAll,
  addField,
  addBookList,
  updateSearchTitle,
  updateGenre,
  deleteBookList
} = bookSlice.actions;
export default bookSlice.reducer;

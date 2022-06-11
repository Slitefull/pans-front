import React, { FC } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import CatalogPage from "../pages/catalog/catalog";
import BookPage from "../pages/book/book";
import Header from "../components/header/header.component";


const App: FC = (): JSX.Element => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatalogPage/>}/>
          <Route path="/book:id" element={<BookPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

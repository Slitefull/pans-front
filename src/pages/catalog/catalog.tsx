import React, { FC } from "react";
import { useQuery } from '@apollo/client';
import { BookCard } from "../../ui-kit/components/book-card/book-card.component";
import PageWrapper from "../../ui-kit/components/page-wrapper/page-wrapper";
import { booksQuery } from "../../queries/catalog/catalog";

import { CatalogWrapper } from "./styles";
import { IBooksQueryResponseModel } from "@/queries/catalog/types";


const CatalogPage: FC = (): JSX.Element => {
  const { data, loading, error } = useQuery<IBooksQueryResponseModel>(booksQuery);

  if (error) return <pre>{error.message}</pre>
  if (loading) return <div>Loading...</div>;

  const { books } = data!;

  return (
    <PageWrapper>
      <CatalogWrapper>
        {books.map((book) => (
          <BookCard
            id={book.id}
            thumbnail={book.thumbnail}
            author={book.author}
            name={book.name}
            year={book.year}
            pages={book.pages}
            genre={book.genre}
          />
        ))}
      </CatalogWrapper>
    </PageWrapper>
  );
}

export default CatalogPage;

import React, { FC } from "react";
import PageWrapper from "../../ui-kit/components/page-wrapper/page-wrapper";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import PenIcon from "../../ui-kit/icons/pen/pen";
import { bookByIdQuery } from "../../queries/catalog/catalog";

import { BookAuthor, BookHeader, BookInfo, BookThumbnail, BookTitle, ThumbnailWrapper } from "./styled";
import { IBookByIdQueryResponseModel } from "@/queries/catalog/types";


const BookPage: FC = (): JSX.Element => {
  const { id } = useParams();
  const bookId = id!.replace(":", "");

  const { data, loading, error } = useQuery<IBookByIdQueryResponseModel>(bookByIdQuery, {
    variables: {
      id: bookId
    }
  });

  if (error) return <pre>{error.message}</pre>
  if (loading) return <div>Loading...</div>;

  const { book } = data!;

  return (
    <PageWrapper>
      <BookHeader>
        <ThumbnailWrapper>
          <BookThumbnail background={book.thumbnail}/>
        </ThumbnailWrapper>
        <BookInfo>
          <BookTitle>
            {book.name}
          </BookTitle>
          <BookAuthor>
            <PenIcon color="#FFFFFF"/> {book.author}
          </BookAuthor>
        </BookInfo>
      </BookHeader>
    </PageWrapper>
  );
}

export default BookPage;

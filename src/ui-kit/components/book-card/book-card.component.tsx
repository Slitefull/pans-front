import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import DateIcon from "../../icons/date/date";
import PenIcon from "../../icons/pen/pen";
import BookIcon from "../../icons/book/book";

import {
  AdditionalInfoWrapper,
  AuthorTitle,
  MainInfoWrapper,
  BookCardAlbum,
  BookCardDate,
  BookCardThumbnail,
  BookCardTitle,
  BookCardWrapper,
  PagesCount
} from './styled';
import { IBookCardProps } from './types/book-card.types';


export const BookCard: FC<IBookCardProps> = memo((
  {
    id,
    thumbnail,
    author,
    name,
    year,
    pages,
    genre,
  }
): JSX.Element => {
  const history = useNavigate();

  const onClickCardHandler = useCallback(() => {
    history(`/book:${id}`)
  }, [])

  return (
    <BookCardWrapper onClick={onClickCardHandler}>
      <BookCardAlbum>
        {genre}
      </BookCardAlbum>
      <BookCardThumbnail background={thumbnail}/>
      <MainInfoWrapper>
        <BookCardDate>
          <DateIcon/> {year}
        </BookCardDate>
        <BookCardTitle>
          {name}
        </BookCardTitle>
      </MainInfoWrapper>
      <AdditionalInfoWrapper>
        <AuthorTitle>
          <PenIcon/> {author}
        </AuthorTitle>
        <PagesCount>
          <BookIcon/> {pages}
        </PagesCount>
      </AdditionalInfoWrapper>
    </BookCardWrapper>
  )
});

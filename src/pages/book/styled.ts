import styled from "styled-components";
import { IBookThumbnailProps } from "@/pages/book/types/styled";


export const ThumbnailWrapper = styled.div` && {
  position: relative;
}`;

export const BookThumbnail = styled.div<IBookThumbnailProps>` && {
  width: 300px;
  height: 300px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  text-align: center;
  border-radius: 10px;
}`;

export const BookHeader = styled.div` && {
  display: flex;
  flex-direction: row;
  gap: 0 30px;
}`;

export const BookInfo = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 15px 0;
}`;

export const BookTitle = styled.p` && {
  font-size: 28px;
  color: #FFFFFF;
  margin: 0;
  font-weight: 700;
}`;

export const BookAuthor = styled.p` && {
  font-size: 16px;
  color: #FFFFFF;
  margin: 0;
  font-weight: 600;
}`;

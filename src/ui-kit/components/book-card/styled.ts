import styled from 'styled-components';
import { IBookCardThumbnailProps } from "@ui-kit/components/book-card/types/styled.types";


export const BookCardWrapper = styled.div` && {
  height: auto;
  width: 280px;
  max-height: 500px;
  border-radius: 10px;
  background: #FFFFFF;
  transition: 0.2s;
  position: relative;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px 5px rgba(79, 64, 59, 0.71);
    transition: 0.2s;
  }
}`;

export const BookCardAlbum = styled.span` && {
  font-size: 12px;
  color: #fff;
  padding: 4px 25px;
  border-radius: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: absolute;
  background: #E84E8A;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  transform: translateY(-12px);
}`

export const MainInfoWrapper = styled.div` && {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  border: 2px solid #F4F4F4;
}`;

export const AdditionalInfoWrapper = styled.div` && {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 10px;
  padding: 15px;
  font-size: 12px;
  justify-content: space-between;
}`;

export const BookCardDate = styled.p` && {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0;
  color: #000;
  text-align: center;
}`;

export const BookCardTitle = styled.p` && {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1;
  text-align: center;
  color: #000;
}`;

export const AuthorTitle = styled.p` && {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  margin: 0;
  text-align: center;
}`;

export const PagesCount = styled.p` && {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  margin: 0;
  text-align: center;
}`;

export const BookCardThumbnail = styled.div<IBookCardThumbnailProps>` && {
  width: 100%;
  height: 250px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  text-align: center;
  border-radius: 10px 10px 0 0;
}`;

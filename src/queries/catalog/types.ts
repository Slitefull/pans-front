import { ICatalogElement } from "@/pages/catalog/types/catalog";


export interface IBooksQueryResponseModel {
  books: ICatalogElement[];
}

export interface IBookByIdQueryResponseModel {
  book: ICatalogElement;
}

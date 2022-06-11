import { gql } from "@apollo/client";


export const booksQuery = gql`
    query Catalog {
        books {
            id,
            thumbnail,
            author,
            name,
            year,
            pages,
            genre,
        }
    }
`;

export const bookByIdQuery = gql`
    query Catalog($id: ID!) {
        book(id: $id) {
            id,
            thumbnail,
            author,
            name,
            year,
            pages,
            genre,
        }
    }
`;

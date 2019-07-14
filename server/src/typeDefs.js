/*jshint esversion: 9 */

const typeDefs = `
schema {
  query: Query
}

type Query {
  reviews(orderBy: ReviewsOrderBy = ID_ASC): [Review]
  books(orderBy: BooksOrderBy = RATING_DESC): [Book]
  users: [User]
  book(id: ID!): Book
}

type Review {
  id: ID!
  rating: Int
  title: String
  comment: String
  book: Book
  user: User
}

type Book {
  id: ID!
  title: String!
  description: String!
  imageURL(size: ImageSize = LARGE): String!
  rating: Float
  subtitle: String
  ratingCount: Int
  authors: [Author]
  reviews: [Review]
}

type User {
  id: ID!
  email: String!
  name: String!
  imageURL(size: Int = 50): String
}

type Author {
  id: ID!
  name: String!
}

enum ImageSize {
  SMALL
  LARGE
}

enum BooksOrderBy {
  RATING_DESC
  ID_DESC
}

enum ReviewsOrderBy {
  ID_DESC
  ID_ASC
}
`;

export default typeDefs;

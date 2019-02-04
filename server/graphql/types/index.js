module.exports = `
  scalar Date

  scalar TopSellingItems

  type Transaction {
    id: ID
    itemName: String!
    price: Float!
    quantity: Int!
    departmentName: String!
    storeName: String!
    transactionDate: Date!
  }

  type Query {
    transactions: [Transaction!]
    transactionsByName(name: String!): [Transaction]!
    transactionByID(id: ID!): Transaction
    topSellingItems(
      by: String!
      departmentName: String,
      storeName: String
    ): [TopSellingItems]
  }

  type Mutation {
    addTransaction(
      name: String!,
      price: Float!,
      quantity: Int!,
      department: String!,
      store: String!,
      transactiondate: Date!
    ): Transaction
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

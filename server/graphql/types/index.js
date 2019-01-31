module.exports = `
  scalar Date

  type Company {
    name: String
    id: ID
    stores: [Store!]
  }

  type Store {
    id: ID
    name: String!
    location: String!
    company: Company
    departments: [Department]
  }

  type Department {
    id: ID
    name: String!
    store: Store!
    sales: [Sale]
  }

  type Sale {
    id: ID
    name: String!
    price: Float!
    quantity: Int!
    transactiondate: Date!
    department: Department!
  }


  type Query {
    company: [Company!]!
    companyByName(name: String!): Company!
    companyByID(id: ID!): Company!
    departments: [Department!]!
    departmentByName(name: String!): Department!
    departmentByID(id: ID!): Department!
    stores: [Store!]!
    storeByName(name: String!): Store!
    storeByID(id: ID!): Store!
    sales: [Sale!]!
    salesByName(name: String!): [Sale]!
    saleByID(id: ID!): Sale!
  }

  type Mutation {
    test(date: Date): Date
    addCompany(name: String!): Company!
    editCompanyName(name: String!, newname: String!): Company!
    removeCompany(name: String!): Company!
    addStore(name: String!, company: String!, location: String!): Store!
    editStoreName(name: String!, newname: String): Store!
    editStoreLocation(location: String!, newlocation: String!): Store!
    removeStore(id: ID!): Store!
    addDepartment(name: String!, storename: String!): Department!
    editDepartment(name: String!, newname: String!): Department!
    removeDepartment(id: ID!): Department!
    addSale(
      name: String!,
      price: Float!,
      quantity: Int!,
      department: String!,
      store: String!,
      transactiondate: Date!): Sale!
    deleteSale(id: ID!): Sale!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

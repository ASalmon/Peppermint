const graphql = require('graphql');
const {
  CompanyType,
  StoreType,
  DepartmentType,
  SaleType,
} = require('../types');

const {
  companyResolver,
  storeResolver,
} = require('../resolver');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID,
} = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Company mutation options
    newCompany: {
      type: CompanyType,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: companyResolver.newCompany,
    },
    changeCompanyName: {
      type: CompanyType,
      args: {
        name: {
          type: GraphQLString,
        },
        newname: {
          type: GraphQLString,
        },
      },
      resolve: companyResolver.changeCompanyName,
    },
    deleteCompany: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: companyResolver.deleteCompany,
    },
    // Store mutation options
    newStore: {
      type: StoreType,
      args: {
        name: {
          type: GraphQLString,
        },
        companyname: {
          type: GraphQLString,
        },
        location: {
          type: GraphQLString,
        },
      },
      resolve: storeResolver.newStore,
    },
    changeStoreName: {
      type: StoreType,
      args: {
        name: {
          type: GraphQLString,
        },
        newstorename: {
          type: GraphQLString,
        },
      },
      resolve: storeResolver.changeStoreName,
    },
    deleteStore: {
      type: StoreType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: storeResolver.deleteStore,
    },
    // // Department mutation options
    // newDepartment: {
    //   type: DepartmentType,
    //   args: {
    //     name: {
    //       type: GraphQLString,
    //     },
    //     storename: {
    //       type: GraphQLString,
    //     },
    //   },
    //   // resole: '', // add resolver
    // },
    // changeDepartmentName: {
    //   type: DepartmentType,
    //   args: {
    //     name: {
    //       type: GraphQLString,
    //     },
    //     newdepartmentname: {
    //       type: GraphQLString,
    //     },
    //   },
    //   // resolve: '', // add resolver
    // },
    // deleteDepartment: {
    //   type: DepartmentType,
    //   args: {
    //     id: {
    //       type: GraphQLID,
    //     },
    //   },
    //   // resolve: '', // add resolver
    // },
    // // Sale mutation options
    // newSale: {
    //   type: SaleType,
    //   args: {
    //     name: {
    //       type: GraphQLString,
    //     },
    //     price: {
    //       type: GraphQLFloat,
    //     },
    //     quantity: {
    //       type: GraphQLInt,
    //     },
    //     departmentname: {
    //       type: GraphQLString,
    //     },
    //     storename: {
    //       type: GraphQLString,
    //     },
    //   },
    //   // resolve: '', // add resolver
    // },
    // deleteSale: {
    //   type: SaleType,
    //   args: {
    //     id: GraphQLID,
    //   },
    //   // resolve: '', // add resolver
    // },
  },
});

module.exports = Mutation;

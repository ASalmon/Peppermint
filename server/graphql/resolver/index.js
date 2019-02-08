const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const {
  Transaction,
} = require('../../models');


module.exports = {
  Query: {
    transactions() {
      return Transaction.find({});
    },
    transactionsByName(parent, args) {
      return Transaction.find({ name: args.name });
    },
    transactionByID(parent, args) {
      return Transaction.findById(args.id);
    },
    performancebyDates(parent, args) {
      return Transaction.aggregate([
        {
          $match: {
            transactionDate: {
              $gte: new Date(args.from),
              $lt: new Date(args.to),
            },
          },
        },
        {
          $project: {
            month: { $month: '$transactionDate' },
            year: { $year: '$transactionDate' },
            price: 1,
          },
        },
        {
          $group: {
            _id: { month: '$month', year: '$year' },
            total: { $sum: '$price' },
          },
        },
        {
          $sort: {
            '_id.month': 1,
            '_id.year': 1,
          },
        },
        {
          $project: {
            total: 1,
            date: '$_id',
            _id: 0,
          },
        },
      ]);
    },
    topSellingItems(parent, args) {
      switch (args.by) {
        case 'quantity':
          return Transaction.aggregate([
            {
              $group: {
                _id: '$itemName',
                totalQuantity: {
                  $sum: '$quantity',
                },
              },
            },
            {
              $sort: {
                totalQuantity: -1,
              },
            },
          ]);
        case 'price':
          return Transaction.aggregate([
            {
              $group: {
                _id: '$itemName',
                totalPrice: {
                  $sum: '$price',
                },
              },
            },
            {
              $sort: {
                totalPrice: -1,
              },
            },
          ]);
        default:
          return [];
      }
    },
    topPerformingStores() {
      return Transaction.aggregate([
        {
          $group: {
            _id: '$storeName',
            totalAmount: {
              $sum: '$price',
            },
          },
        },
        {
          $sort: {
            totalAmount: -1,
          },
        },
      ]);
    },
  },
  Mutation: {
  },
  Transaction: {
    transactionDate(parent) {
      return parent.transactionDate;
    },
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value);
      }
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};

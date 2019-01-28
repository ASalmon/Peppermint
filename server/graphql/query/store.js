const {
  Company,
  Store,
} = require('../../models');

module.exports = {
  companyInfo:
    parent => Company.findById({ _id: parent.companyId }),
  stores: () => Store.find({}),
  storeByName: (parent, args) => Store.findOne({ name: args.name }),
  storeById: (parent, args) => Store.findById({ id: args.id }),
};

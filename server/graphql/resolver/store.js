const {
  Company,
  Store,
} = require('../../models');

module.exports = {
  newStore: async (parent, args) => {
    const company = await Company.findOne({ name: args.companyname });
    const store = new Store({
      name: args.name,
      location: args.location,
      companyId: company._id,
    });
    return store.save();
  },
  changeChangeName: (parent, args) => {
    const { name, newname } = args;
    return Store.findOneAndUpdate(name, { name: newname });
  },
  deleteStore: (parent, args) => Store.findOneAndDelete(args.id),
};

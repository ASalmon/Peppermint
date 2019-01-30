const {
  Company,
  Store,
  Sale,
  Department,
} = require('../../models');


module.exports = {
  Query: {
    company() {
      return Company.find({});
    },
    companyByName(parent, args) {
      return Company.findOne({ name: args.name });
    },
    companyByID(parent, args) {
      return Company.findById(args.id);
    },
    departments() {
      return Department.find({});
    },
    departmentByName(parent, args) {
      return Department.findOne({ name: args.name });
    },
    departmentByID(parent, args) {
      return Department.findById(args.id);
    },
    stores() {
      return Store.find({});
    },
    storeByName(parent, args) {
      return Store.findOne({ name: args.name });
    },
    storeByID(parent, args) {
      return Store.findById(args.id);
    },
    sales() {
      return Sale.find({});
    },
    salesByName(parent, args) {
      return Sale.find({ name: args.name });
    },
    saleByID(parent, args) {
      return Sale.findById(args.id);
    },
  },
  Mutation: {
    addCompany(parent, args) {
      const newCompany = new Company({
        name: args.name,
      });
      return newCompany.save();
    },
    editCompanyName(parent, args) {
      return Company
        .findByIdAndUpdate({ name: args.name }, { name: args.newname });
    },
    removeCompany(parent, args) {
      return Company.findOneAndDelete({ name: args.name });
    },
    async addStore(parent, args) {
      const company = await Company.findOne({ name: args.company });
      const store = new Store({
        name: args.name,
        location: args.location,
        companyId: company._id,
      });
      return store.save();
    },
    editStoreName(parent, args) {
      const { name, newname } = args;
      return Store.findOneAndUpdate(name, { name: newname });
    },
    editStoreLocation(parent, args) {
      return Store
        .findByIdAndUpdate({ name: args.name }, { name: args.newname });
    },
    removeStore(parent, args) {
      return Store.findByIdAndDelete(args.ID);
    },
    async addDepartment(parent, args) {
      const store = await Store.findOne({ name: args.storename });
      const department = new Department({
        name: args.name,
        storeId: store._id,
      });
      return department.save();
    },
    editDepartment(parent, args) {
      return Department
        .findByIdAndUpdate({ name: args.name }, { name: args.newname });
    },
    removeDepartment(parent, args) {
      return Department.findByIdAndDelete(args.ID);
    },
    async addSale(parent, args) {
      const department = await Department.findOne({ name: args.department });
      const sale = new Sale({
        name: args.name,
        price: args.price,
        quantity: args.quantity,
        departmentId: department._id,
      });
      return sale.save();
    },
    deleteSale(parent, args) {
      return Sale.findByIdAndDelete(args.ID);
    },
  },
  Company: {
    stores(parent) {
      return Store.find({ companyId: parent.id });
    },
  },
  Store: {
    company(parent) {
      return Company.findById(parent.companyId);
    },
    departments(parent) {
      return Department.find({ storeId: parent.ID });
    },
  },
  Department: {
    store(parent) {
      return Store.findById(parent.storeId);
    },
    sales(parent) {
      return Sale.find({ departmentId: parent.ID });
    },
  },
  Sale: {
    department(parent) {
      return Department.findById(parent.departmentId);
    },
  },
};

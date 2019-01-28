const { Company } = require('../../models');

module.exports = {
  newCompany: (parent, args) => {
    const company = new Company({
      name: args.name,
    });
    return company.save();
  },
  changeCompanyName: (parent, args) => {
    const { name, newname } = args;
    return Company.findOneAndUpdate(name, { name: newname });
  },
  deleteCompany: (parent, args) => Company.findOneAndDelete(args.id),
};

const { Company } = require('../../models');

module.exports = {
  companyInfo: (parent, args) => Company.findOne({ name: args.name }),
};

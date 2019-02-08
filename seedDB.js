require('dotenv').config();
const mongoose = require('mongoose');
const { Transaction } = require('./server/models');

mongoose
  .connect(
    process.env.MONGODB_URI, {
      useNewUrlParser: true,
    },
  );

const transactionSeed = [
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-01-02'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-02-05'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-03-08'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-04-03'),
  },
  {
    itemName: 'Cannondale Synapse',
    price: 1649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-05-15'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-06-22'),
  },
  {
    itemName: 'Giant Contend',
    price: 945.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-07-28'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-08-05'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-09-08'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-10-02'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-11-05'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-12-02'),
  },
  {
    itemName: 'Giant Defy',
    price: 1840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-12-05'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-01-02'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-01-05'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-02-08'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-05-02'),
  },
  {
    itemName: 'Shorts',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-06-05'),
  },
  {
    itemName: 'Helmet',
    price: 40.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-07-08'),
  },
  {
    itemName: 'Brakes',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-01-01'),
  },
  {
    itemName: 'Pedals',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-02-07'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-03-08'),
  },
  {
    itemName: 'Handlebars',
    price: 130.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-04-01'),
  },
  {
    itemName: 'Chains',
    price: 38.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-05-05'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 3,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-06-08'),
  },
  {
    itemName: 'Brakes',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-07-02'),
  },
  {
    itemName: 'Pedals',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-08-06'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-09-13'),
  },
  {
    itemName: 'Handlebars',
    price: 130.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-10-02'),
  },
  {
    itemName: 'Chains',
    price: 38.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-11-05'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Brakes',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-12-09'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-01-05'),
  },
  {
    itemName: 'Handlebars',
    price: 130.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Atlanta',
    transactionDate: new Date('2018-04-08'),
  },
  {
    itemName: 'Giant Contend',
    price: 945.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-01-01'),
  },
  {
    itemName: 'Cannondale Synapse',
    price: 1649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-02-05'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-03-08'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-04-15'),
  },
  {
    itemName: 'Giant Defy',
    price: 1840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-05-01'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-06-08'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-07-02'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-08-05'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-09-08'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Chicago',
    transactionDate: new Date('2018-12-01'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-01-05'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-01-10'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-01-25'),
  },
  {
    itemName: 'Helmets',
    price: 40.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-02-15'),
  },
  {
    itemName: 'Shorts',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-03-08'),
  },
  {
    itemName: 'Jerseys',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-03-08'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-03-25'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-03-28'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-04-20'),
  },
  {
    itemName: 'Helmets',
    price: 40.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-05-05'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-06-08'),
  },
  {
    itemName: 'Jerseys',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-07-02'),
  },
  {
    itemName: 'Jerseys',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-07-15'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-08-08'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-09-02'),
  },
  {
    itemName: 'Helmets',
    price: 40.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-10-20'),
  },
  {
    itemName: 'Shorts',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-11-08'),
  },
  {
    itemName: 'Shorts',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-12-02'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Chicago',
    transactionDate: new Date('2018-12-28'),
  },
  {
    itemName: 'Brakes',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Chicago',
    transactionDate: new Date('2018-01-28'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Chicago',
    transactionDate: new Date('2018-03-02'),
  },
  {
    itemName: 'Handlebars',
    price: 130.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Chicago',
    transactionDate: new Date('2018-08-05'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Chicago',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 2,
    departmentName: 'Parts',
    storeName: 'Chicago',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Chicago',
    transactionDate: new Date('2018-12-10'),
  },
  {
    itemName: 'Chains',
    price: 38.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Chicago',
    transactionDate: new Date('2018-12-28'),
  },
  {
    itemName: 'Trek X-Caliber 8',
    price: 1199.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-01-02'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-01-01'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-01-16'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-01-16'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-03-17'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-04-08'),
  },
  {
    itemName: 'Specialized ALLEZ',
    price: 599.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-05-23'),
  },
  {
    itemName: 'Cannondale Synapse',
    price: 1649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-06-05'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-07-01'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-08-02'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-09-13'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'Dallas',
    transactionDate: new Date('2018-12-01'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-02-14'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-05-05'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-07-18'),
  },
  {
    itemName: 'Jerseys',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-07-22'),
  },
  {
    itemName: 'Helmets',
    price: 40.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-09-05'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-10-08'),
  },
  {
    itemName: 'Helmets',
    price: 40.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-11-15'),
  },
  {
    itemName: 'Shorts',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-12-05'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'Dallas',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Brakes',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-01-25'),
  },
  {
    itemName: 'Pedals',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-02-25'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-03-18'),
  },
  {
    itemName: 'Handlebars',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-03-22'),
  },
  {
    itemName: 'Chains',
    price: 38.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-03-25'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-04-08'),
  },
  {
    itemName: 'Handlebars',
    price: 130.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-05-02'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-06-05'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-07-08'),
  },
  {
    itemName: 'Handlebars',
    price: 120.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-08-02'),
  },
  {
    itemName: 'Brakes',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-09-05'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-09-18'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-11-22'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 2,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-12-05'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'Dallas',
    transactionDate: new Date('2018-12-18'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-01-01'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-01-15'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-02-08'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-02-22'),
  },
  {
    itemName: 'Specialized ALLEX',
    price: 599.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-03-17'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-04-08'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-04-15'),
  },
  {
    itemName: 'Cannondale CAADX',
    price: 1680.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-05-05'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-05-12'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-06-14'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-07-02'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-08-08'),
  },
  {
    itemName: 'Trek 920',
    price: 2099.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-08-09'),
  },
  {
    itemName: 'Giant Contend',
    price: 945.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-08-22'),
  },
  {
    itemName: 'Giant Defy',
    price: 1840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-09-08'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-09-12'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-10-05'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-10-31'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-11-22'),
  },
  {
    itemName: 'Specialized Dolce',
    price: 840.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-12-06'),
  },
  {
    itemName: 'Trek 1120',
    price: 2649.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-01-02'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-01-05'),
  },
  {
    itemName: 'Gloves',
    price: 35.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-01-08'),
  },
  {
    itemName: 'Shoes',
    price: 120.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-02-18'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-05-05'),
  },
  {
    itemName: 'T-shirts',
    price: 20.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-05-08'),
  },
  {
    itemName: 'Jerseys',
    price: 60.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-06-12'),
  },
  {
    itemName: 'Helmets',
    price: 40.99,
    quantity: 1,
    departmentName: 'Clothing',
    storeName: 'New York',
    transactionDate: new Date('2018-09-05'),
  },
  {
    itemName: 'Saddle',
    price: 100.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-02-08'),
  },
  {
    itemName: 'Handlebars',
    price: 130.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-04-12'),
  },
  {
    itemName: 'Chains',
    price: 38.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-06-25'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-08-08'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-10-02'),
  },
  {
    itemName: 'Pedals',
    price: 60.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-11-05'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 4,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-12-08'),
  },
  {
    itemName: 'Bell',
    price: 40.99,
    quantity: 1,
    departmentName: 'Parts',
    storeName: 'New York',
    transactionDate: new Date('2018-12-10'),
  },
  {
    itemName: 'Trek X-Caliber 8',
    price: 1199.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2017-01-08'),
  },
  {
    itemName: 'Trek X-Caliber 8',
    price: 1199.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2017-01-08'),
  },
  {
    itemName: 'Trek X-Caliber 8',
    price: 1199.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2017-01-08'),
  },
  {
    itemName: 'Trek X-Caliber 8',
    price: 1199.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2017-01-08'),
  },
  {
    itemName: 'Trek X-Caliber 8',
    price: 1199.99,
    quantity: 1,
    departmentName: 'Bikes',
    storeName: 'New York',
    transactionDate: new Date('2017-02-15'),
  },
];

Transaction
  .remove({})
  .then(() => Transaction.collection.insertMany(transactionSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });

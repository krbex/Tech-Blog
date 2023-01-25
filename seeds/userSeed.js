const { User } = require("../models");

const userData = [
  {
    username: "Aidan",
    email: "aidan.krbec5@gmail.com",
    password: "password123",
  },
  {
    username: "Alayna",
    email: "Alayna@email.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

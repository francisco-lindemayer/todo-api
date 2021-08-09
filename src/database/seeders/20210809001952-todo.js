'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'todo',
      [
        {
          title: 'Do something',
          description: 'Do something cool',
          email: 'johndoe@gmail.com',
          name: 'John Doe',
          status: 'OPENED',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Do something else',
          description: 'Do something great',
          email: 'johndoe@gmail.com',
          name: 'John Doe',
          status: 'OPENED',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Rest a bit',
          description: 'Carpe diem',
          email: 'johndoe@gmail.com',
          name: 'John Doe',
          status: 'OPENED',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('todo', null, {});
  },
};

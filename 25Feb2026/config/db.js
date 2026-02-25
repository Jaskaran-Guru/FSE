import { Sequelize }  from 'sequelize';
const sequelize = new Sequelize('mysql://root:2006@localhost:3306/test')

const dbConnection=async() => {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

dbConnection();

export {dbConnection};
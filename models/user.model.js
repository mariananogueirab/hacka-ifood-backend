const connect = require('./connection');

const DB_COLLECTION = 'Users';

const create = async (user) => {
  const {
    name, email, password, restrictions,
  } = user;
  const db = await connect();
  const { insertedId } = await db.collection(DB_COLLECTION)
    .insertOne({
      name, email, password, restrictions,
    });
  return insertedId;
};

const findUser = async (email) => {
  const db = await connect();
  const userFound = await db.collection(DB_COLLECTION)
    .findOne({ email });
  return userFound;
};

const updateRestrictions = async (data) => {
  const {
    restrictions, email,
  } = data;
  const db = await connect();
  await db.collection(DB_COLLECTION)
    .updateOne({ email }, {
      $set: {
        restrictions,
      },
    });
  const newUser = await findUser(email);
  return newUser;
};

module.exports = {
  create,
  findUser,
  updateRestrictions,
};

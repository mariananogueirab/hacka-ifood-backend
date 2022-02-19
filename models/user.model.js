const { ObjectId } = require('mongodb');
const connect = require('./connection');

const DB_COLLECTION = 'Users';

const create = async (user) => {
  const {
    username, email, password, restrictions,
  } = user;
  const db = await connect();
  const { insertedId } = await db.collection(DB_COLLECTION)
    .insertOne({
      username, email, password, restrictions,
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
    restrictions, id,
  } = data;
  const db = await connect();
  await db.collection(DB_COLLECTION)
    .updateOne({ _id: ObjectId(id) }, {
      $set: {
        restrictions,
      },
    });
  const newUser = await findUser(id);
  return newUser;
};

module.exports = {
  create,
  findUser,
  updateRestrictions,
};

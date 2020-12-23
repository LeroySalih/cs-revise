const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dotenv = require('dotenv');
dotenv.config();
console.log(`Connecting to DB ${process.env.MONGODB_DB}`)

const data = require('./module-data.js');

// Database Name
const dbName = process.env.MONGODB_DB;

// Create a new MongoClient
const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect( async (err) => {
  assert.strictEqual(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  await db.collection('modules').deleteMany({});
  await db.collection('modules').insertOne(data['networks']);
  await db.collection('modules').insertOne(data['number_systems']);
  await db.collection('modules').insertOne(data['databases']);
  await db.collection('modules').insertOne(data['encoding-data']);

  client.close();
});


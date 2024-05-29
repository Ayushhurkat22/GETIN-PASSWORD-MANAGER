/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// // /* eslint-disable no-unused-vars */
// // /* eslint-disable no-undef */
// // // /* eslint-disable no-unused-vars */
// // // /* eslint-disable no-undef */
// // // const express = require('express');
// // // const dotenv = require('dotenv');
// // // const { MongoClient, ObjectId } = require('mongodb');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors')

// // // dotenv.config();

// // // const url = process.env.MONGO_URI;
// // // const client = new MongoClient(url);

// // // const dbName = 'PasswordManager';
// // // const app = express();
// // // const port = 3000;

// // // app.use(cors())
// // // app.use(bodyParser.json());

// // // client.connect();

// // // // Fetching the credentials from db
// // // app.get('/', async (req, res) => {
// // //   const db = client.db(dbName);
// // //   const collection = db.collection('credentials');
// // //   const findResult = await collection.find({}).toArray();
// // //   res.json(findResult);
// // // });

// // // // Saving the credentials in db
// // // app.post('/', async (req, res) => {
// // //   const { website, username, password } = req.body; 
// // //   const date = new Date().toISOString().split('T')[0]; 
// // //   const credential = { website, username, password, date }; 
// // //   const db = client.db(dbName);
// // //   const collection = db.collection('credentials');
// // //   await collection.insertOne(credential);
// // //   res.send({ success: true, message: 'Credential saved successfully' });
// // // });

// // // // Deleting the credentials from db
// // // app.delete('/', async (req, res) => {
// // //   const { website } = req.body; 
// // //   const db = client.db(dbName);
// // //   const collection = db.collection('credentials');
// // //   await collection.deleteOne({ website }); 
// // //   res.send({ success: true, message: 'Credential deleted successfully' });
// // // });

// // // // Starting the server
// // // app.listen(port, () => {
// // //   console.log(`Example app listening on http://localhost:${port}`);
// // // });


// // const express = require('express');
// // const dotenv = require('dotenv');
// // const { MongoClient, ObjectId } = require('mongodb');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');

// // dotenv.config();

// // const url = process.env.MONGO_URI;
// // const client = new MongoClient(url);

// // const dbName = 'PasswordManager';
// // const app = express();
// // const port = 3000;

// // app.use(cors());
// // app.use(bodyParser.json());

// // client.connect();

// // // Fetching the credentials from db
// // app.get('/', async (req, res) => {
// //   const db = client.db(dbName);
// //   const collection = db.collection('credentials');
// //   const findResult = await collection.find({}).toArray();
// //   res.json(findResult);
// // });

// // // Saving the credentials in db
// // app.post('/', async (req, res) => {
// //   const { website, username, password } = req.body; 
// //   const date = new Date().toISOString().split('T')[0]; 
// //   const credential = { website, username, password, date }; 
// //   const db = client.db(dbName);
// //   const collection = db.collection('credentials');
// //   await collection.insertOne(credential);
// //   res.send({ success: true, message: 'Credential saved successfully' });
// // });

// // // Deleting the credentials from db
// // app.delete('/', async (req, res) => {
// //   const { website } = req.body; 
// //   const db = client.db(dbName);
// //   const collection = db.collection('credentials');
// //   await collection.deleteOne({ website }); 
// //   res.send({ success: true, message: 'Credential deleted successfully' });
// // });

// // // Registering a new user
// // app.post('/register', async (req, res) => {
// //   const { username, password } = req.body;

// //   if (!username || !password) {
// //     return res.status(400).send({ success: false, message: 'Username and password are required' });
// //   }

// //   const db = client.db(dbName);
// //   const collection = db.collection('users');

// //   const existingUser = await collection.findOne({ username });

// //   if (existingUser) {
// //     return res.status(400).send({ success: false, message: 'Username already exists. Please choose a different username.' });
// //   }

// //   const user = { username, password };
// //   await collection.insertOne(user);

// //   res.send({ success: true, message: 'User registered successfully' });
// // });

// // app.post('/login', async (req, res) => {
// //   const { username, password } = req.body;

// //   if (!username || !password) {
// //     return res.status(400).send({ success: false, message: 'Username and password are required' });
// //   }

// //   const db = client.db(dbName);
// //   const collection = db.collection('users');

// //   const user = await collection.findOne({ username, password });

// //   if (!user) {
// //     return res.status(400).send({ success: false, message: 'Invalid username or password' });
// //   }

// //   res.send({ success: true, message: 'Login successful', user });
// // });

// // // Starting the server
// // app.listen(port, () => {
// //   console.log(`Example app listening on http://localhost:${port}`);
// // });

// const express = require('express');
// const dotenv = require('dotenv');
// const { MongoClient, ObjectId } = require('mongodb');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// dotenv.config();

// const url = process.env.MONGO_URI;
// const client = new MongoClient(url);

// const dbName = 'PasswordManager';
// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// client.connect();

// // Fetching the credentials from db
// app.get('/', async (req, res) => {
//   const { user } = req.params;
//   const db = client.db(dbName);
//   const collection = db.collection('credentials');
//   const findResult = await collection.find({user}).toArray();
//   res.json(findResult);
// });

// // Saving the credentials in db
// app.post('/', async (req, res) => {
//   const { website, username, password, user } = req.body;
//   const date = new Date().toISOString().split('T')[0];
//   const credential = { website, username, password, date, user };
//   const db = client.db(dbName);
//   const collection = db.collection('credentials');
//   await collection.insertOne(credential);
//   res.send({ success: true, message: 'Credential saved successfully' });
// });

// // Deleting the credentials from db
// app.delete('/', async (req, res) => {
//   const { website, username, user } = req.body;
//   const db = client.db(dbName);
//   const collection = db.collection('credentials');
//   await collection.deleteOne({ website, username, user });
//   res.send({ success: true, message: 'Credential deleted successfully' });
// });

// // Registering a new user
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).send({ success: false, message: 'Username and password are required' });
//   }

//   const db = client.db(dbName);
//   const collection = db.collection('users');

//   const existingUser = await collection.findOne({ username });

//   if (existingUser) {
//     return res.status(400).send({ success: false, message: 'Username already exists. Please choose a different username.' });
//   }

//   const user = { username, password };
//   await collection.insertOne(user);

//   res.send({ success: true, message: 'User registered successfully' });
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).send({ success: false, message: 'Username and password are required' });
//   }

//   const db = client.db(dbName);
//   const collection = db.collection('users');

//   const user = await collection.findOne({ username, password });

//   if (!user) {
//     return res.status(400).send({ success: false, message: 'Invalid username or password' });
//   }

//   res.send({ success: true, message: 'Login successful', user });
// });

// // Starting the server
// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`);
// });
const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = 'PasswordManager';
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

client.connect();

// Fetching the credentials from db
app.get('/', async (req, res) => {
  const user = req.query.user;
  const db = client.db(dbName);
  const collection = db.collection('credentials');
  const findResult = await collection.find({ user }).toArray();
  res.json(findResult);
});

// Saving the credentials in db
app.post('/', async (req, res) => {
  const { website, username, password, user } = req.body;
  const date = new Date().toISOString().split('T')[0];
  const credential = { website, username, password, date, user };
  const db = client.db(dbName);
  const collection = db.collection('credentials');
  await collection.insertOne(credential);
  res.send({ success: true, message: 'Credential saved successfully' });
});

// Deleting the credentials from db
app.delete('/', async (req, res) => {
  const { website, username, user } = req.body;
  const db = client.db(dbName);
  const collection = db.collection('credentials');
  await collection.deleteOne({ website, username, user });
  res.send({ success: true, message: 'Credential deleted successfully' });
});

// Registering a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ success: false, message: 'Username and password are required' });
  }

  const db = client.db(dbName);
  const collection = db.collection('users');

  const existingUser = await collection.findOne({ username });

  if (existingUser) {
    return res.status(400).send({ success: false, message: 'Username already exists. Please choose a different username.' });
  }

  const user = { username, password };
  await collection.insertOne(user);

  res.send({ success: true, message: 'User registered successfully' });
});

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ success: false, message: 'Username and password are required' });
  }

  const db = client.db(dbName);
  const collection = db.collection('users');

  const user = await collection.findOne({ username, password });

  if (!user) {
    return res.status(400).send({ success: false, message: 'Invalid username or password' });
  }

  res.send({ success: true, message: 'Login successful', user });
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

const express = require('express');

const nextErrors = require('./errors/nextErrors');
const {
  usersRoutes,
  loginRoutes,
  categoryRoutes,
  postRoutes,
} = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', usersRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', postRoutes);

app.get('/', (_request, response) => response.send());

app.use(nextErrors);

module.exports = app;

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const apiRouter = require('./api.js');
const userRouter = require('./userRouter.js');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
//The API endpoint will direct all ticket requests such as
//setting newTicket, updating Ticket, and deleting a Ticket to the API router file
app.use('/api', apiRouter);

//user endpoint will send any /user requests to the user router
app.use('/user', userRouter);

//This "/" endpoint will render our client side html file
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../src/index.html'));
});
//catch-all route handler--for unknown routes
app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


// const server = app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
// module.exports = server;
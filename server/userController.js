const models = require('../server/Model');
const User = models.User;
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//creating new user accounts
exports.createUser = (req, res, next) => {
  const { username, password, authorized } = req.body;
  let hashedPassword;

  //use bcrypt to make password strong
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) return next(err);
    else {
      User.create(
        {
          username: username,
          password: hash, //bcrypted pswd
          authorized: authorized
        },
        (err, result) => {
          if (err) {
            console.log('Error creating new user:', err);
            return res.status(400).json(err);
          }
          return next();
        });
    }
  })

};


exports.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, result) => { //just search username
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!result) return res.status(400).send('Username not found.');
    else {
      //check if pswd user entered equals the bcrypt pswd in db
      bcrypt.compare(password, result.password, (err, response) => {
        if (response === true) {
          const SSID = result._id;
          res.cookie('SSID', SSID, { httpOnly: true, maxAge: 900000 })
          res.locals.user = result;
          return next();
        }
        else return res.status(400).send('Password incorrect.');

      })

    }
  });
};

//verifying authorization level of user (resident vs fellow); works with resolveTicket controller
exports.verifyAuthorization = (req, res, next) => {
  const { username } = req.body;
  User.findOne({ username: username }, (err, result) => {
    if (err) {
      return res.status(400).send(err)
    }
    if (!result) { return res.status(400).send('User not found') };

    res.locals.authorized = result.authorized; //equal to true or false;
    return next();
  })
}


const models = require('../server/Model');
const User = models.User;
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//creating new user accounts
exports.createUser = async (req, res, next) => {
  const { username, password, authorized } = req.body;
  let hashedPassword;

  //use bcrypt to make password strong
  await bcrypt.hash(password, saltRounds, (err, hash) => {
    hashedPassword = hash;
  })
  console.log('pswd: ', password)
  User.create(
    {
      username: username,
      password: hashedPassword, //bcrypted pswd
      authorized: authorized
    },
    (err, result) => {
      if (err) {
        console.log('Error creating new user:', err);
        return res.status(400).json(err);
      }
      return next();
    }
  );
};

//verifying login with user and password
//user/:username/:password
//user/lex/password
exports.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, result) => { //just search username
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!result) return res.status(400).send('Username or password incorrect.');
    else {
      //check if pswd user entered equals the bcrypt pswd in db
      res.locals.user = result;
      return next();
    }
  })
};

//verifying authorization level of user (resident vs fellow)
exports.verifyAuthorization = (req, res, next) => {
  const { username, password } = req.params;
  User.findOne({ username: username, password: password }, (err, result) => {
    if (err) {
      return res.status(400).send(err)
    }
    if (!result) { return res.status(400).send('User not found') };

    res.locals.authorized = result.authorized; //equal to true or false;
    return next();
  })
}

//deleting user from DB
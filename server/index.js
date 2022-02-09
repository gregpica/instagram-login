const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())


app.post('/login', (req, res) => {
  const accounts = [
    {
      accountIdentifier: 'josh.maynard@ruggable.com',
      password: 'password1'
    },
    {
      accountIdentifier: 'jon.presley@ruggable.com',
      password: 'password2'
    },
    {      
      accountIdentifier: 'gpica@bu.edu',
      password: 'password3'
    }
  ];

  const {
    accountIdentifier,
    password
  } = req.body;

  // logging to server per instructions
  console.log(`The phone number, username, or email you entered: ${accountIdentifier}`)
  console.log(`The password you entered: ${password}`)

  const isAccountFound = accounts.find(account => account.accountIdentifier === accountIdentifier && account.password === password);

  if (isAccountFound) {
    res.status(200).send({});
  } else {
    const isAccountIdentifierFound = accounts.find(account => account.accountIdentifier === accountIdentifier);

    // Error messages on failed login on www.instagram.com
    const usernameDoesNotExist = "The username you entered doesn't belong to an account. Please check your username and try again.";
    const incorrectPassword = "Sorry, your password was incorrect. Please double-check your password.";
  
    res.status(401).send({ message: isAccountIdentifierFound ? incorrectPassword : usernameDoesNotExist })
  }

}); 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
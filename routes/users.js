var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('users.txt', function(err, data) {
    if (err) {
      console.log('Something went wrong');
    }

    const users = JSON.parse(data)

    res.send(users)
    return;
  })
});

router.get('/add', function(req, res, next) {
  fs.readFile('users.txt', function(err, data) {
    if (err) {
      console.log('Something went wrong');

      res.send('404 - Something went wrong!')
    }

    const users = JSON.parse(data)

    let newUser = req.body;

    users.push(newUser);

    fs.writeFile('users.txt', JSON.stringify(users, null, 4), function(err) {
      if (err) {
        console.log('Something went wrong');
      }
    });

    res.send(users)
    return;
    
  });
});

module.exports = router;

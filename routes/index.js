var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Got a Get request on /index.")
  res.render('index', { title: 'My Super Chat' });
});

router.post('/', urlencodedParser, (req, res) => {
  const msg = req.body.message;
  console.log("We just got a new message:"+msg);
  res.redirect('/');
});

module.exports = router;

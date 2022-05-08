var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('contact')
})
router.get('/review', function (req, res) {
  res.render('contactReview')
})
router.post('/post', function (req, res) {
  res.redirect('review')
  //   res.redirect('/contact')
})
module.exports = router

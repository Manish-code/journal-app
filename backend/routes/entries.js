const router = require('express').Router();
let Entry = require('../models/entry.model');

router.route('/').get((req, res) => {
  Entry.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = Date.parse(req.body.date);

  const newEntry = new Entry({
    title,
    content,
    date,
  });

  newEntry.save()
  .then(() => res.json('Journal entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

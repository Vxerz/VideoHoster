const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const render = require('render');
const multer = require('multer');
  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })

app.listen(port, () => console.log("Listening.."));
app.use(express.static('public'));

/*var a = {"a":"https://www.google.com", "b":"https://scratch.mit.edu", "c":"https://www.youtube.com"};

for (const [title, url] of Object.entries(a)) {
  createPage([title, url]);
}

function createPage(page) {
  console.log("NEW PAGE: ", page);
  app.get('/' + page[0], function(req, res){
      res.render('index.ejs', {
          word : page[1]
      });
  });
}*/

app.post('/uploader', upload.single('video'), function (req, res, next) {
  console.log("POSTED: ", req.body);
  console.log("FILENAME: ", req.file.originalname);
  res.redirect('https://custompages.disabler.repl.co/uploads/' + req.file.originalname);
  /*var imagePath = 'https://custompages.disabler.repl.co/uploads/' + req.file.originalname;
  res.render('video.ejs', {
    link : 'https://custompages.disabler.repl.co/uploads/' + req.file.originalname
  });*/
})
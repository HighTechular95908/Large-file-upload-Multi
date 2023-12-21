const express = require('express');
const multer = require('multer');
const app = express();

// Set up multer to handle file uploads 35
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Endpoint to receive base64 image and save it
app.post('/api/upload/avatar', async (req, res) => {
  console.log('---------------------------->');
  // Get the file path of the uploaded image
  const imagePath = path.join('./images/', req.file.filename);
  res.send('Image saved successfully');
});

app.get('/', (req, res) => {
  console.log("--------------->");
  res.send('hello');
})

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

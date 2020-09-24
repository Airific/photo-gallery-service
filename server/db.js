const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/gallery', function() {
  console.log(connected);
});

const gallerySchema = new Schema ({
  imgURLs: Array
});

const Image = mongoose.model('Image', gallerySchema);


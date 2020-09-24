const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/gallery', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const gallerySchema = new Schema({
  id: Number,
  imgURLs: Array,
});

const Image = mongoose.model('Image', gallerySchema);

console.log('db connected');

// header section
const headerSchema = new Schema({
  id: Number,
  title: String,
  address: String,
  isSave: Boolean,
  reviews: Number,
  superhost: Boolean,

});

const Header = mongoose.model('Header', headerSchema);

function getImgById(id, callback) {
  Image.find({ id }, callback)
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
}

function getHeaderById(id, callback) {
  Header.find({ id }, callback)
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
}

module.exports = {
  db,
  getImgById,
  getHeaderById,
};

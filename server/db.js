const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
//172.17.0.3:27017
mongoose.connect('mongodb://172.17.0.3:27017/gallery', { useNewUrlParser: true, useUnifiedTopology: true });
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
  reviews: Number,
  totalReviews: Number,
  superhost: Boolean,

});

const Header = mongoose.model('Header', headerSchema);

// functions

function getImgById(id, callback) {
  Image.find({ id }, callback);
}

function getHeaderById(id, callback) {
  Header.find({ id }, callback);
}

module.exports = {
  db,
  Header,
  Image,
  getImgById,
  getHeaderById,
};

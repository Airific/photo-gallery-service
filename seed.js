/* eslint-disable no-plusplus */
const faker = require('faker');
const db = require('./server/db.js');

console.log('running seed file');

const imgPath = 'https://airific-gallery-photos.s3-us-west-1.amazonaws.com/house-';

const house1 = [
  'photo-1505691723518-36a5ac3be353.jpeg',
  'photo-1505691938895-1758d7feb511.jpeg',
  'photo-1505692433770-36f19f51681d.jpeg',
  'photo-1505692952047-1a78307da8f2.jpeg',
  'photo-1505693070124-1cce01268b88.jpeg',
  'photo-1505693196193-bfd859ae01d9.jpeg',
  'photo-1505693416388-ac5ce068fe85.jpeg',
  'photo-1574118139440-94aef80059b5.jpeg',
];

const house2 = [
  'photo-1560185127-1902ccdc5094.jpeg',
  'photo-1560448204-603b3fc33ddc.jpeg',
  'photo-1560448204-61dc36dc98c8.jpeg',
  'photo-1560448204-e02f11c3d0e2.jpeg',
  'photo-1560448205-17d3a46c84de.jpeg',
  'photo-1560448205-4d9b3e6bb6db.jpeg',
  'photo-1560448205-d82bf18b9bcf.jpeg',
  'photo-1560449752-ac541afdd6b5.jpeg',
];

const house3 = [
  'photo-1543502862-071fad0e1161.jpeg',
  'photo-1543502976-275548976b63.jpeg',
  'photo-1543502999-b65be91f22ea.jpeg',
  'photo-1565183928294-7063f23ce0f8.jpeg',
  'photo-1565184099246-7c2dfcbf5811.jpeg',
  'photo-1570737209810-87a8e7245f88.jpeg',
  'photo-1574873215043-44119461cb3b.jpeg',
  'photo-1574873347196-ddd0560bc1f1.jpeg',
  'photo-1574873392684-75f9963434cb.jpeg',
  'photo-1584622548639-c6d8b4e2434b.jpeg',
  'photo-1584622650111-993a426fbf0a.jpeg',
];

const house1Links = house1.map((link) => ({ url: `${imgPath}1/${link}`, description: faker.lorem.sentence() }));

const house2Links = house2.map((link) => ({ url: `${imgPath}2/${link}`, description: faker.lorem.sentence() }));

const house3Links = house3.map((link) => ({ url: `${imgPath}3/${link}`, description: faker.lorem.sentence() }));

const houses = [house1Links, house2Links, house3Links];

const imgData = [];
for (let i = 0; i < 100; i++) {
  imgData.push({ id: i + 1, imgURLs: houses[Math.floor(Math.random() * 3)] });
}

db.db.dropCollection('images', (err) => {
  if (err) {
    console.log('error dropping images collection', err);
  } else {
    console.log('images collection dropped');
  }
});

db.Image.insertMany(imgData)
  .then(() => {
    console.log('images data inserted');
  })
  .catch((err) => {
    console.log(err);
  });

// header

function randomData() {
  const address = faker.fake('{{address.city}}, {{address.state}}, {{address.country}}');
  const descrip = ['Wine Country View', 'Ocean View', 'Entire Apartment', 'Entire House'];
  const beds = ['4 Beds', '5 Beds', '3 Beds', '6 Beds'];
  const nearby = ['Close to town', '5mins walk from Central', 'Close to grocery stores', 'Near Attractions'];

  const title = `${descrip[Math.floor(Math.random() * 4)]}, ${beds[Math.floor(Math.random() * 4)]} ${nearby[Math.floor(Math.random() * 4)]}, ${address.split(',').slice(0, 2)}`;

  return {
    address,
    title,
  };
}

const header = [];
for (let i = 0; i < 100; i++) {
  const dataSet = randomData();
  header.push(
    {
      id: i + 1,
      title: dataSet.title,
      address: dataSet.address,
      reviews: faker.random.number({ min: 1, max: 5, precision: 0.01 }),
      totalReviews: faker.random.number({ min: 15, max: 300 }),
      superhost: faker.random.boolean(),
    },
  );
}

db.db.dropCollection('headers', (err) => {
  if (err) {
    console.log('error dropping headers collection', err);
  } else {
    console.log('headers collection dropped');
  }
});

db.Header.insertMany(header)
  .then(() => {
    console.log('header data inserted');
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });

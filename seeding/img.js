const faker = require('faker');


let imgPath = 'https://airific-gallery-photos.s3-us-west-1.amazonaws.com/house-';

let house1 = [
  'photo-1505691723518-36a5ac3be353.jpeg',
  'photo-1505691938895-1758d7feb511.jpeg',
  'photo-1505692433770-36f19f51681d.jpeg',
  'photo-1505692952047-1a78307da8f2.jpeg',
  'photo-1505693070124-1cce01268b88.jpeg',
  'photo-1505693196193-bfd859ae01d9.jpeg',
  'photo-1505693416388-ac5ce068fe85.jpeg',
  'photo-1574118139440-94aef80059b5.jpeg'
];

let house2 = [
  'photo-1560185127-1902ccdc5094.jpeg',
  'photo-1560448204-603b3fc33ddc.jpeg',
  'photo-1560448204-61dc36dc98c8.jpeg',
  'photo-1560448204-e02f11c3d0e2.jpeg',
  'photo-1560448205-17d3a46c84de.jpeg',
  'photo-1560448205-4d9b3e6bb6db.jpeg',
  'photo-1560448205-d82bf18b9bcf.jpeg',
  'photo-1560449752-ac541afdd6b5.jpeg'
];

let house3 = [
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
  'photo-1584622650111-993a426fbf0a.jpeg'
];

let house1Links = house1.map(link => {
  return {url: imgPath + '1/' + link, description: faker.lorem.sentence()};
});

let house2Links = house2.map(link => {
  return {url: imgPath + '2/' + link, description: faker.lorem.sentence()};
});

let house3Links = house3.map(link => {
  return {url: imgPath + '3/' + link, description: faker.lorem.sentence()};
});

let houses = [house1Links, house2Links, house3Links];

let imgData = [];
for (let i = 0; i < 100; i++) {
  imgData.push({imgURLs: houses[Math.floor(Math.random() * 3)]});
}

// console.log(imgData[0], imgData[4], imgData[77]);


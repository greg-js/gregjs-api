const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('lodash');

const archiveResponse = require('./parse/archive');
const categoriesResponse = require('./parse/categories');
const tagsResponse = require('./parse/tags');

function writeData(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFileAsync(filename, JSON.stringify(data), 'utf-8').then(() => {
      console.log(`${filename} saved.`);
      resolve();
    }).catch(err => {
      reject(err);
    });
  });
}

const writePromises = [
  writeData('./db/archive-response.json', archiveResponse),
  writeData('./db/categories-response.json', categoriesResponse),
  writeData('./db/tags-response.json', tagsResponse)
];

return Promise.all(writePromises).then(() => {
  console.log('Database fully parsed.');
}).catch(err => {
  console.error(err);
});

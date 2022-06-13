const fs = require('fs');

const breedDetailsFromFile = function (breed, callbackFunc) {
  // console.log('Step 1: breedDetailsFromFile: Calling readFile...');

  const dataReader = fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("Step 2: In readFile's Callback: it has the data.");
    if (!error) {
      callbackFunc(data);
    }
    if (error) {
      callbackFunc(undefined);
    }
  });
};
const printOutCatBreed = breed => {
  // console.log(`Step 3 Return value ${breed}`);
};

module.exports = breedDetailsFromFile;

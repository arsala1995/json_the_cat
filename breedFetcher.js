const request = require('request');


const fetchBreedDescription = function (breedName, callback) {
  const newURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(newURL, (error, response, body) => {

    if (error) {

      callback(error, null);
    }


    else if ((response && response.statusCode) === 200) {

      const data = JSON.parse(body);

      if (data.length === 0) {

        callback("Such name does not exist!", null);
      }
      else {

        callback(null, data[0]["description"]);
      }
    }

  });
  return callback;
};

module.exports = { fetchBreedDescription };
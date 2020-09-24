const request = require('request');
const args = process.argv;
args.slice(2);

const newURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[2];
request(newURL, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  
   else if((response && response.statusCode) === 200){ 
    
    const data = JSON.parse(body);
    
    if (data.length === 0) {
     
      console.log("There is error");
   }
   else{
    console.log(data[0]["description"]);
   }
  }
  else{
    console.log("statusCode: " + response && response.statusCode)
  }

});
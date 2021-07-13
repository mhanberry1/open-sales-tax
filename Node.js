var fs = require('fs');
var path = require('path');

const express = require("express");
const cors = require('cors');
   
// json file with the data
var data = fs.readFileSync(path.resolve(__dirname, 'taxcode.json'));
   
var elements = JSON.parse(data);
const app = express();

    
app.listen(process.env.PORT, 
    () => console.log("Server Start at the Port " + process.env.PORT));
    
app.use(express.static('public'));
app.use(cors());
  
// when get request is made, alldata() is called
app.get('/elements', alldata);
   
function alldata(request, response) {
       
    // Returns all information about the elements
    response.send(elements);
}
  
app.get('/elements/:element/', searchElement);
  
function searchElement(request, response) {
    var word = request.params.element;
       
    if(elements[word]) {
        var reply = { taxRate: elements[word] }    
    }
    else {
        var reply = {
            status:"404 Not Found"
        }
    }
       
    response.send(reply);
}

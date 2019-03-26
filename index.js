import converter from 'convert-array-to-csv';
import { COMUNI } from './geo-data.js';
var fs = require("fs");

const csvData = converter(COMUNI);

fs.writeFile("./codici-catastali.csv", csvData, function(err, data) {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
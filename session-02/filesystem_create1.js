var fs = require('fs')
fs.open("buatbarulagi.txt", "rs", function(err, file) {
  if (err) throw err;
  console.log("sukses lagi")
})
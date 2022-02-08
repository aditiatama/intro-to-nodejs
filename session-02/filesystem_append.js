var fs = require('fs')

fs.appendFile("buatbaru.txt", "Belajar di Hacktiv8 Indonesia", function(err) {
  if (err) throw err;
  console.log("sukses dibuat")
})
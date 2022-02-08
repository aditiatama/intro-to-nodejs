var fs = require('fs')

fs.open('buatbarulagi.txt', 'w+', function(err, file) {
  if (err) throw err;

  let content = "Hello saya student di Hacktive8"
  
  fs.writeFile(file, content, (err) => {
    if (err) throw err;
    console.log("sukses yang ketiga")
  })

  fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log(data.toString('utf8'))
  })
})
const express = require('express');
const app = express();

app.use('/', function(req, res, next) {
  console.log('Aplikasi sedang berjalan')
  next()
})

app.get('/', function(req, res) {
  res.send("<h1>Welcome</h1>") 
})

app.use('/table', function(req, res, next) {
  var shirt = true;
  var shoes = false;
  if (shirt && shoes) {
    next()
  } else {
    res.send("Gagal") 
  }
})

app.get('/table', function(req, res, next) {
  var shirt = true;
  var shoes = false;
  if (shirt && shoes) {
    next()
  }
  res.send("<h1>Success Table 1</h1>") 
})

app.get('/table', function(req, res) {
  res.send("<h1>Success Table 2</h1>") 
})

app.get('/about', function(req, res) {
  res.sendFile('./about.html', {root: __dirname}) 
})

app.get('/menu/:isiMenu/kelengkapan/:isiKelengkapan', function(req, res) {
  let message = '';
  const IsiMenu = req.params.isiMenu;
  const IsiKelengkapan = req.params.isiKelengkapan;

  if (IsiMenu == 1) {
    if (IsiKelengkapan == 'y') {
      message = "boleh duduk"
    } else {
      message = "tidak boleh duduk"
    }
  } else if (IsiMenu == 2) {
    if (IsiKelengkapan == 'burger') {
      message = "makanan anda di anter sesuai pesanan"
    } else {
      message = "tidak sesuai dengan pesanan"
    }
  } else if (IsiMenu == 3) {
    if (IsiKelengkapan == '24000') {
      message = "berhasil terbayar, terimakasih"
    } else {
      message = "gagal bayar, terimakasih"
    }
  }
  res.send(message) 
})

app.listen(5000, function() {
  console.log('server berjalan di 5000')
})


// if (pilih = 1) pelanggan duduk {
//   if (menggunakan sepatu & kemeja = y){echo boleh duduk}
//   }

// if (pilih = 2) pesan makanan {
//   if (pilih burger = burger ){echo makanan anda di anter sesuai pesanan}
//   }

// if (pilih = 3) bill {
//   if (totalhargamakanan = 24000 ){echo berhasil terbayar, terimakasih}
//   }
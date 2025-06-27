
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use((req, res) => {
  res.status(404).send('<h1>404 - Sayfa Bulunamadı</h1><br><p>Üzgünüz, aradığınız sayfa mevcut değil.</p>');
});


app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

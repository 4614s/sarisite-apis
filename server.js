
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));


app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

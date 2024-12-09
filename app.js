const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Statik dosya sunma

// MongoDB bağlantısını yeni sürüm uyumlu hale getirme
mongoose.connect('mongodb+srv://urunyonetimi:urunyonetimi@cluster0.vgcht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
  }).catch((error) => {
    console.error('MongoDB bağlantı hatası:', error);
  });

const urunRouter = require('./routes/product');
const sepetRouter = require('./routes/sepet');
app.use('/urunler', urunRouter);
app.use('/sepet', sepetRouter);

// Ana sayfa rotasını ekleyin
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3001, () => {
  console.log('Sunucu 3001 portunda çalışıyor');
});

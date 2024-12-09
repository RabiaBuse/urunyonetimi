const express = require('express');
const router = express.Router();
const Urun = require('../models/Urun');

let sepet = [];

// Sepete ürün ekleme
router.post('/', (req, res) => {
  const { urunId, adet } = req.body;
  const urun = sepet.find(item => item.urunId === urunId);
  if (urun) {
    urun.adet += adet;
  } else {
    sepet.push({ urunId, adet });
  }
  res.status(201).send(sepet);
});

// Sepeti listeleme
router.get('/', (req, res) => {
  res.send(sepet);
});

// Sepetten ürün çıkarma
router.delete('/:urunId', (req, res) => {
  sepet = sepet.filter(item => item.urunId !== req.params.urunId);
  res.send(sepet);
});

module.exports = router;

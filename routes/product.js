const express = require('express');
const router = express.Router();
const Product = require('../models/Urun');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer ile dosya yükleme yapılandırması
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const filename = file.originalname;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

// Ürün ekleme
router.post('/', upload.single('product_image'), async (req, res) => {
  console.log("Yeni ürün ekleme isteği:", req.body);
  console.log("Yüklenen dosya bilgileri:", req.file);
  try {
    const product = new Product({
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_image: req.file ? req.file.filename : null
    });
    await product.save();
    res.status(201).send(product);
    console.log("Ürün başarıyla eklendi:", product);
  } catch (error) {
    console.error('Ürün eklenirken hata oluştu:', error.message);
    res.status(400).send({ error: error.message });
  }
});

// Ürün listeleme
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error('Ürünler alınırken hata oluştu:', error.message);
    res.status(500).send({ error: error.message });
  }
});
// Ürün silme 
router.delete('/:id', async (req, res) => 
  { 
    try { const product = await Product.findByIdAndDelete(req.params.id); 
      if (!product) 
        { 
          return res.status(404).send({ error: 'Ürün bulunamadı' }); 
        } 
        res.send({ message: 'Ürün başarıyla silindi', product }); 
      } 
      catch (error) { 
        console.error('Ürün silinirken hata oluştu:', error.message); 
        res.status(500).send({ error: error.message});
      }
  });

module.exports = router;

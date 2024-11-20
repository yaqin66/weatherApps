const express = require('express');
const router = express.Router();

// Endpoint untuk mengunggah file
router.post('/upload', (req, res) => {
  // Logika upload file di sini
  res.json({ message: 'File berhasil diunggah' });
});

// Endpoint lain yang terkait dengan Report
router.get('/status', (req, res) => {
  res.json({ message: 'Status laporan: berhasil' });
});

module.exports = router;

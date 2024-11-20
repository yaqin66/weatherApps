const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fungsi untuk menentukan tingkat administratif (adm1, adm2, dll.)
const getAdmLevel = (cityId) => {
  const parts = cityId.split('.');
  if (parts.length === 1) return 'adm1';
  else if (parts.length === 2) return 'adm2';
  else if (parts.length === 3) return 'adm3';
  else return 'adm4';
};

// Endpoint untuk mendapatkan data cuaca
router.get('/weather/:cityId', async (req, res) => {
  const { cityId } = req.params;
  const admLevel = getAdmLevel(cityId);

  try {
    const response = await axios.get(
      `https://api.bmkg.go.id/publik/prakiraan-cuaca?${admLevel}=${cityId}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

module.exports = router;

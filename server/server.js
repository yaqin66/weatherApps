const express = require('express');
const cors = require('cors');

const homeRoutes = require('./routes/home'); // Import route Home
const reportRoutes = require('./routes/reports'); // Import route Report

const app = express();
app.use(cors());
app.use(express.json());

// Gunakan routes yang sudah dibuat
app.use('/api', homeRoutes); // Semua rute Home akan memiliki prefix /home
app.use('/report', reportRoutes); // Semua rute Report akan memiliki prefix /report

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

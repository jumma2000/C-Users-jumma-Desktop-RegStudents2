require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('تم الاتصال بقاعدة البيانات MongoDB Atlas بنجاح'))
.catch(err => console.error('خطأ في الاتصال بقاعدة البيانات:', err));

// Routes
app.use('/api/students', studentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ: ${PORT}`);
});
const express = require('express');
const app = express();

// Render sẽ cung cấp biến PORT, ta dùng nó
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('23120255 - 23120262 - 23120264 xin chàooooo!!!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});
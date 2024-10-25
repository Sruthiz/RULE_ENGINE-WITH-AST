const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const ruleRoutes = require('./RULE_ENGINE-WITH-AST/routes/ruleRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


const MONGO_URL = "mongodb://127.0.0.1:27017/rule_engine_data";



async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log("Connected to Database");
})
.catch((err) => {
    console.error("Error Occurred in Connection", err);
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});

app.use('/api/rules', ruleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
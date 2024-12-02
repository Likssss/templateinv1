const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

// Endpoint to save wishes
app.post('/api/saveWish', (req, res) => {
    const { name, message } = req.body;
    const filePath = './wishes.txt';
    const wishEntry = `Name: ${name}, Message: ${message}\n`;

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Append to the existing file
        fs.appendFile(filePath, wishEntry, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
                res.status(500).send('Error appending to text file');
                return;
            }
            console.log('Appended to existing file');
            res.send('Wishes appended successfully!');
        });
    } else {
        // Create a new file and write data
        fs.writeFile(filePath, wishEntry, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.status(500).send('Error writing to text file');
                return;
            }
            console.log('Created new file and wrote data');
            res.send('Wishes saved successfully!');
        });
    }
});

// Endpoint to retrieve wishes
app.get('/api/getWishes', (req, res) => {
    const filePath = './wishes.txt';

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.status(500).send('Error reading text file');
                return;
            }
            console.log('Retrieved wishes from file');
            res.send(data);
        });
    } else {
        res.send('No wishes found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

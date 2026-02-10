const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'This is some sample data.',
        timestamp: new Date()
    };
    res.status(200).json(data);
}
);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

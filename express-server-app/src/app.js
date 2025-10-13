const express = require('express');

const app = express();
const PORT = 8001;

app.use(bodyParser.json());

let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (typeof text === 'string' && text.length > 0) {
        tasks.push(text);
        res.json({ message: 'Task added successfully' });
    } else {
        res.status(400).json({ error: 'Invalid task text' });
    }
});

app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
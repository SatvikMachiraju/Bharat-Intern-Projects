const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// In a real application, you'd have user authentication and database integration for storing tasks, users, etc.

// Sample data for tasks
const tasks = [];

// Endpoint to create a new task
app.post('/tasks', (req, res) => {
    const { title, description, assignedTo } = req.body;

    if (!title || !description || !assignedTo) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        assignedTo,
    };

    tasks.push(newTask);

    return res.status(201).json(newTask);
});

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

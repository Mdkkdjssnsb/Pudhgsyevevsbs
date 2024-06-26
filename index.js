const express = require('express');
const { G4F } = require('g4f');

const app = express();
const g4f = new G4F();

// Endpoint to handle chat completion with prompt and model
app.get('/chat', async (req, res) => {
    const { prompt, model } = req.query;

    if (!prompt || !model) {
        return res.status(400).json({ error: 'Prompt and model are required' });
    }

    const messages = [
        { role: 'user', content: prompt }
    ];

    const options = {
        provider: g4f.providers.GPT,
        model: model,
        debug: true,
        proxy: ''
    };

    try {
        const answer = await g4f.chatCompletion(messages, options);
        res.json({ answer });
    } catch (error) {
        console.error('Error completing chat:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

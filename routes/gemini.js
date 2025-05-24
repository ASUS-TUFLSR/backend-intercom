const express = require('express');
const router = express.Router();
const { generateSummary } = require('../api/gemini');

router.use(express.json());

router.post('/summarize', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    const summary = await generateSummary(prompt);
    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate summary' });
  }
});

module.exports = router;

const express = require('express');
const { GoogleAuth } = require('google-auth-library');
const { PredictionServiceClient } = require('@google-cloud/aiplatform');
require('dotenv').config();

const router = express.Router();

const location = process.env.GC_LOCATION;
const projectId = process.env.GC_PROJECT_ID;
const endpointId = process.env.GC_VERTEX_AI_ENDPOINT_ID;
const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const clientOptions = {
  apiEndpoint: `${location}-aiplatform.googleapis.com`,
  keyFilename: keyFile,
};

const predictionServiceClient = new PredictionServiceClient(clientOptions);

router.post('/summarize', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const [response] = await predictionServiceClient.predict({
      endpoint: `projects/${projectId}/locations/${location}/endpoints/${endpointId}`,
      instances: [{ content: prompt }],
      parameters: { temperature: 0.5, maxOutputTokens: 256 },
    });

    const prediction = response.predictions[0].content;
    res.json({ summary: prediction });
  } catch (error) {
    console.error('Gemini AI Error:', error);
    res.status(500).json({ error: 'AI summarization failed.' });
  }
});

module.exports = router;

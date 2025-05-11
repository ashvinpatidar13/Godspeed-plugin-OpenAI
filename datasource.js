const axios = require("axios");

class OpenAIDatasource {
  constructor(config) {
    this.client = axios.create({
      baseURL: "https://api.openai.com/v1",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
    });
    this.model = config.model;
  }

  async callLLM(prompt) {
    const response = await this.client.post("/chat/completions", {
      model: this.model,
      messages: [{ role: "user", content: prompt }],
    });
    return response.data.choices[0].message.content;
  }
}

module.exports = { OpenAIDatasource };
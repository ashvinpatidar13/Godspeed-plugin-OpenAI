const { OpenAIDatasource } = require("./datasource");

let openAIClient = null;

module.exports = {
  connect: async function (config) {
    openAIClient = new OpenAIDatasource(config);
  },

  actions: {
    chatPrompt: async function ({ prompt }) {
      if (!openAIClient) throw new Error("Datasource not initialized.");
      return await openAIClient.callLLM(prompt);
    }
  }
};
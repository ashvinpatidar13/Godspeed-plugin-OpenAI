const { OpenAIDatasource } = require("./datasource");

(async () => {
  const ds = new OpenAIDatasource({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-3.5-turbo",
  });

  const response = await ds.callLLM("Say something funny about AI.");
  console.log("Response from OpenAI:", response);
})();
module.exports = {
  name: "godspeed-ds-openai",
  type: "datasource",
  schema: {
    type: "object",
    required: ["apiKey", "model"],
    properties: {
      apiKey: { type: "string" },
      model: { type: "string" }
    }
  }
};
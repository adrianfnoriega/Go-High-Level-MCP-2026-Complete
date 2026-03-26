// Vercel serverless entry — delegates to the full MCP server
const handler = require('../dist/main.js').default;
module.exports = handler;

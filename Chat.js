const fetch = require("node-fetch");

exports.handler = async function(event) {
  const { message } = JSON.parse(event.body);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  return {
    statusCode: 200,
    body: JSON.stringify({ reply })
  };
};

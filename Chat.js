const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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'  // <-- put your key here
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: userMessage }]
  })
});

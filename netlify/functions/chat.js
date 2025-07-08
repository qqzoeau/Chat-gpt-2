export async function handler(event) {
  const { message } = JSON.parse(event.body);

  const apiKey = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful AI assistant." },
        { role: "user", content: message }
      ],
    }),
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      reply: data.choices?.[0]?.message?.content || "No reply from GPT",
    }),
  };
}

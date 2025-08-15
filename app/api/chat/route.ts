import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
      const { messages } = await req.json();
      const complition = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: messages }],
      });

  return Response.json({
    response: complition.choices[0].message.content,
  });
  } catch (error) {
    return Response.json({
      error: "Failed to generate response"
    },{
      status:500
    }
);
  }
}

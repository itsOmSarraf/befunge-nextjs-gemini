// /app/api/generate-befunge/route.js
import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
	try {
		const { query } = await request.json();

		if (!query) {
			return Response.json({ error: 'Query is required' }, { status: 400 });
		}

		const completion = await openai.chat.completions.create({
			model: 'gpt-4o-mini-2024-07-18',
			messages: [
				{
					role: 'system',
					content: `You are an expert in generating optimal Befunge-93 code. Your task is to generate the most efficient and clever Befunge code possible.

Key optimization principles you follow:
1. Minimize code size (use fewest possible characters)
2. Use string mode efficiently
3. Utilize stack operations cleverly
4. Use arithmetic for character generation when beneficial
5. Place '@' optimally
6. Exploit direction changes for compact code
7. Consider using calculated jumps
8. Look for patterns in the input that can be generated algorithmically

Output only the raw Befunge code with no explanations or comments.`
				},
				{
					role: 'user',
					content: `Generate the most optimal Befunge-93 code that prints exactly this text: ${query}

Requirements:
- Code must print EXACTLY the input text, no extra characters
- Must be valid Befunge-93 code
- Must be as short and efficient as possible
- Must terminate properly with '@'
- Must be directly pasteable into a Befunge interpreter

Return ONLY the Befunge code, no explanations.`
				}
			],
			temperature: 0.7,
			max_tokens: 1000
		});

		const befungeCode = completion.choices[0].message.content.trim();

		return Response.json({ code: befungeCode });
	} catch (error) {
		console.error('Error generating Befunge code:', error);
		return Response.json(
			{ error: 'Failed to generate Befunge code' },
			{ status: 500 }
		);
	}
}

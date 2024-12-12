'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function submitFormWithAI(query) {
	try {
		const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
		const result = await model.generateContent([
			{
				text: `Generate the most optimal Befunge-93 code that prints exactly this text: ${query.query}
                Rules:
                - Only output the raw Befunge code with no explanations
                - The code must print EXACTLY the input text, no extra characters
                - Code must be directly pasteable into a Befunge interpreter
                - Optimize for:
                  1. Minimal code size (fewest characters)
                  2. Efficient use of the stack
                  3. Clever use of Befunge features like direction changes
                - Use string mode when beneficial
                - Utilize the stack for number operations where possible
                - Consider using arithmetic operations to generate characters
                - Place '@' optimally to end program
                - Avoid unnecessary operations and redundant code
                Do not include any explanations or comments, just the optimized Befunge code.`
			}
		]);

		const response = await result.response;
		return {
			success: true,
			error: null,
			data: response.text()
		};
	} catch (error) {
		console.error('Error in form submission:', error);
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Form submission failed',
			data: null
		};
	}
}

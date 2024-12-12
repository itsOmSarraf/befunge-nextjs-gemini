# Befunge Code Generator

A web application that generates optimized Befunge code using Google's Gemini AI. This tool allows users to input desired output text and receive corresponding Befunge-93 code that will produce that exact output.

## Features

- Simple and intuitive web interface
- Real-time code generation using Gemini AI
- Copy-to-clipboard functionality
- Error handling and loading states
- Optimized Befunge code generation
- Modern UI using shadcn/ui components

## Prerequisites

- Node.js 18+ installed
- A Google API key (Gemini API)

## Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd befunge-generator
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:

```env
GEMINI_API_KEY=your_google_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## Usage

1. Open the application in your browser
2. Enter the text you want your Befunge code to output
3. Click "Generate Code"
4. Copy the generated code using the copy button
5. Use the code in any Befunge-93 interpreter

## Dependencies

- Next.js
- React
- @google/generative-ai
- shadcn/ui components
- Lucide React icons

## Getting a Google API Key

1. Visit the Google AI Studio: https://aistudio.google.com/app/apikey
2. Create or sign in to your Google account
3. Create a new API key
4. Copy the key and add it to your `.env` file

## Acknowledgments

- Built with Next.js and shadcn/ui
- Uses Google's Gemini AI for code generation
- Inspired by the esoteric programming language Befunge-93

## License

[Your chosen license]

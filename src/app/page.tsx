'use client'

import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea" // Changed from Input to Textarea
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy } from "lucide-react"
import { submitFormWithAI } from "@/actions/sample-gemini-call.js"

export default function BefungeGenerator() {
  const [output, setOutput] = useState(null);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setCopied(false);

    try {
      const response = await submitFormWithAI(formData);
      if (response.success) {
        setOutput(response.data);
      } else {
        setError(response.error || 'Failed to generate code');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Befunge Code Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Textarea // Changed from Input to Textarea
                name="query"
                placeholder="Enter your Befunge code request..."
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
            >
              Generate Code
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {output && (
            <div className="mt-6">
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  <code>{output}</code>
                </pre>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={copyToClipboard}
                >
                  <Copy className={copied ? "text-green-500" : "text-slate-50"} size={16} />
                </Button>
              </div>
              {copied && (
                <p className="text-sm text-green-500 mt-2">
                  Copied to clipboard!
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
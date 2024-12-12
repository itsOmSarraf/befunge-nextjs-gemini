'use client'

import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy } from "lucide-react"

export default function BefungeGenerator() {
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setCopied(false);

        const formData = new FormData(e.target);
        const query = formData.get('query');

        try {
            const response = await fetch('/api/generate-befunge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate code');
            }

            setOutput(data.code);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
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
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Textarea
                                name="query"
                                placeholder="Enter the text you want to generate in Befunge..."
                                className="w-full min-h-[100px]"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? 'Generating...' : 'Generate Code'}
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
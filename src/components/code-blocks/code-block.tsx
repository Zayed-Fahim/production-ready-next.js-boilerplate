'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CodeBlock({
  examples
}: {
  examples: { name: string; code: string }[];
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-lg border bg-card">
      <div className="flex border-b bg-muted/50">
        {examples.map((example, index) => (
          <button
            key={example.name}
            className={`px-4 py-2 text-sm font-medium ${activeTab === index ? 'text-foreground border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab(index)}
          >
            {example.name}
          </button>
        ))}
      </div>
      <SyntaxHighlighter
        language="typescript"
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.5rem 0.5rem',
          background: 'hsl(var(--background))'
        }}
      >
        {examples[activeTab]?.code ?? ''}
      </SyntaxHighlighter>
    </div>
  );
}

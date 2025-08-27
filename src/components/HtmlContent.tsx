import React from 'react';

interface HtmlContentProps {
  content: string;
  className?: string;
}

export function HtmlContent({ content, className = '' }: HtmlContentProps) {
  if (!content || typeof content !== 'string') return null;

  // Clean up the HTML content
  const cleanContent = content
    .replace(/<body[^>]*>/gi, '')
    .replace(/<\/body>/gi, '')
    .replace(/<html[^>]*>/gi, '')
    .replace(/<\/html>/gi, '')
    .replace(/<head[^>]*>.*?<\/head>/gis, '')
    .trim();

  return (
    <div 
      className={`prose prose-sm max-w-none text-muted-foreground ${className}`}
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  );
}
import React from 'react';

interface HtmlContentProps {
  content: string;
  className?: string;
}

export function HtmlContent({ content, className = '' }: HtmlContentProps) {
  if (!content || typeof content !== 'string') return null;

  // Clean up the HTML content - remove ALL HTML tags
  const cleanContent = content
    .replace(/<body[^>]*>/gi, '')
    .replace(/<\/body>/gi, '')
    .replace(/<html[^>]*>/gi, '')
    .replace(/<\/html>/gi, '')
    .replace(/<head[^>]*>.*?<\/head>/gis, '')
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
    .replace(/&amp;/g, '&') // Replace HTML entities
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

  return (
    <div className={`prose prose-sm max-w-none text-muted-foreground ${className}`}>
      {cleanContent}
    </div>
  );
}
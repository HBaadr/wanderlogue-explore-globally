import React from 'react';

interface HtmlContentProps {
  content: string;
  className?: string;
}

export function HtmlContent({ content, className = '' }: HtmlContentProps) {
  if (!content || typeof content !== 'string') return null;

  // Parse HTML and convert to JSX elements
  const parseHtmlContent = (htmlContent: string) => {
    // Clean up unwanted tags first
    let cleanedContent = htmlContent
      .replace(/<body[^>]*>/gi, '')
      .replace(/<\/body>/gi, '')
      .replace(/<html[^>]*>/gi, '')
      .replace(/<\/html>/gi, '')
      .replace(/<head[^>]*>.*?<\/head>/gis, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();

    // Split content by HTML tags to process
    const parts = cleanedContent.split(/(<[^>]+>)/g);
    const elements: React.ReactNode[] = [];
    let currentTag = '';
    let textContent = '';

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      
      if (part.startsWith('<') && part.endsWith('>')) {
        // This is an HTML tag
        if (textContent.trim() && currentTag) {
          // Process accumulated text with current tag
          elements.push(renderElement(currentTag, textContent.trim(), i));
          textContent = '';
        }
        
        if (part.startsWith('</')) {
          // Closing tag - reset current tag
          currentTag = '';
        } else {
          // Opening tag - set current tag
          const tagMatch = part.match(/<(\w+)/);
          currentTag = tagMatch ? tagMatch[1] : '';
        }
      } else if (part.trim()) {
        // This is text content
        textContent += part;
      }
    }

    // Handle remaining text content
    if (textContent.trim()) {
      elements.push(renderElement(currentTag || 'p', textContent.trim(), parts.length));
    }

    return elements.length > 0 ? elements : [cleanedContent];
  };

  const renderElement = (tag: string, content: string, key: number) => {
    const cleanContent = content.trim();
    if (!cleanContent) return null;

    switch (tag.toLowerCase()) {
      case 'h1':
        return <h1 key={key} className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{cleanContent}</h1>;
      case 'h2':
        return <h2 key={key} className="text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">{cleanContent}</h2>;
      case 'h3':
        return <h3 key={key} className="text-xl md:text-2xl font-semibold text-foreground mb-2">{cleanContent}</h3>;
      case 'h4':
        return <h4 key={key} className="text-lg md:text-xl font-medium text-foreground mb-2">{cleanContent}</h4>;
      case 'h5':
        return <h5 key={key} className="text-base md:text-lg font-medium text-foreground mb-1">{cleanContent}</h5>;
      case 'h6':
        return <h6 key={key} className="text-sm md:text-base font-medium text-foreground mb-1">{cleanContent}</h6>;
      case 'p':
        return <p key={key} className="text-muted-foreground mb-3 leading-relaxed">{cleanContent}</p>;
      case 'strong':
      case 'b':
        return <strong key={key} className="font-semibold text-foreground">{cleanContent}</strong>;
      case 'em':
      case 'i':
        return <em key={key} className="italic text-foreground">{cleanContent}</em>;
      case 'ul':
        return <ul key={key} className="list-disc list-inside space-y-1 text-muted-foreground mb-3">{cleanContent}</ul>;
      case 'ol':
        return <ol key={key} className="list-decimal list-inside space-y-1 text-muted-foreground mb-3">{cleanContent}</ol>;
      case 'li':
        return <li key={key} className="text-muted-foreground">{cleanContent}</li>;
      default:
        return <p key={key} className="text-muted-foreground mb-3 leading-relaxed">{cleanContent}</p>;
    }
  };

  const parsedContent = parseHtmlContent(content);

  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      {parsedContent}
    </div>
  );
}
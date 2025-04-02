

// Helper function to format markdown content to HTML
export function formatContent(content:any) {
    // Simple markdown formatting - you may want to use a full markdown library
    if (!content) return '';
    
    return content
      // Convert headers
      .replace(/## (.*)/g, '<h2>$1</h2>')
      .replace(/\n\n/g, '</p><p>')
      // Convert bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert lists
      .replace(/- (.*)/g, '<li>$1</li>')
      .replace(/<li>(.*)<\/li>\n<li>/g, '<li>$1</li>\n<li>')
      .replace(/<li>(.*)<\/li>\n(?!<li>)/g, '<li>$1</li></ul>\n')
      .replace(/(?<!<\/ul>\n)<li>/g, '<ul><li>')
      // Wrap in paragraphs
      .replace(/^(.+)$/gm, '<p>$1</p>');
  }
  

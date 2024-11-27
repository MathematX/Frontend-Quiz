import PropTypes from 'prop-types';

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  // Regular expression to handle various Markdown formats
  const parts = content.split(
    /(```[\s\S]*?```|`[^`]+`|\*\*[^*]+\*\*|_[^_]+_|(?:^|\n)- [^\n]+|\n)/g
  );

  return parts.map((part, index) => {
    if (part.startsWith('```') && part.endsWith('```')) {
      // Multiline code block
      const code = part.slice(3, -3);
      return (
        <pre key={index} className='code-block'>
          <code>{code}</code>
        </pre>
      );
    } else if (part.startsWith('`') && part.endsWith('`')) {
      // Inline code
      return (
        <code key={index} className='inline-code'>
          {part.slice(1, -1)}
        </code>
      );
    } else if (part.match(/(?:^|\n)- [^\n]+/)) {
      // List items
      const listItem = part.slice(2).trim();
      return (
        <ul key={index}>
          <li>
            {/* Recursively render the list item content to handle inline code */}
            <MarkdownRenderer content={listItem} />
          </li>
        </ul>
      );
    } else if (part === '\n') {
      // Line break
      return <br key={index} />;
    } else {
      // Regular text
      return <span key={index}>{part}</span>;
    }
  });
};

MarkdownRenderer.propTypes = {
  content: PropTypes.string,
};

export default MarkdownRenderer;

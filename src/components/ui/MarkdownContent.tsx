type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = content.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="space-y-6 text-lg leading-9 text-fenland-dark/80">
      {blocks.map((block) => {
        if (block.startsWith('### ')) {
          return <h3 key={block} className="text-2xl font-black text-fenland-dark">{block.replace(/^### /, '')}</h3>;
        }

        if (block.startsWith('## ')) {
          return <h2 key={block} className="text-3xl font-black text-fenland-dark">{block.replace(/^## /, '')}</h2>;
        }

        if (block.startsWith('- ')) {
          return (
            <ul key={block} className="list-disc space-y-2 pl-6">
              {block.split('\n').map((item) => <li key={item}>{item.replace(/^- /, '')}</li>)}
            </ul>
          );
        }

        return <p key={block}>{block}</p>;
      })}
    </div>
  );
}

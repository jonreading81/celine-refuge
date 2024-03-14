export const components = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  paragraph: ({ children }) => <p className="mb-6 text-md">{children}</p>,
  heading1: ({ children }) => <h1 className="font-bold mb-6">{children}</h1>,
  heading2: ({ children }) => (
    <h2 className="text-2xl font-bold mb-6">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-xl  font-bold mb-6">{children}</h3>
  ),
  list: ({ children }) => <ul className="mb-6">{children}</ul>,
  listItem: ({ children }) => <li className="mb-2">{children}</li>,
};

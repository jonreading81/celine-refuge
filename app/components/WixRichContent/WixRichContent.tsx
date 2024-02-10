import { WixMediaImage } from '@app/components/Image/WixMediaImage';

type Node = {
  type: 'PARAGRAPH' | 'IMAGE' | 'TEXT';
  id: string;
  nodes: Node[];
  imageData: {
    image: {
      src: {
        id: string;
      };
      alt: string;
    };
  };
  textData: {
    text: string;
  };
};

const ContentNode = ({ node }: { node: Node }) => {
  if (node.type === 'TEXT') {
    return <span>{node.textData.text}</span>;
  }
  if (node.type === 'PARAGRAPH') {
    return (
      <p>
        {node.nodes.map((node, index) => (
          <ContentNode key={index} node={node} />
        ))}
      </p>
    );
  }
  if (node.type === 'IMAGE') {
    const { image } = node.imageData;

    return (
      <div className=" py-6 w-full h-[400px] relative">
        <WixMediaImage
          media={`wix:image://v1/${image.src.id}`}
          alt={image.alt}
          sizes="100vw"
          objectFit="contain"
          disableZoom={true}
        />
      </div>
    );
  }
  return null;
};

type Props = {
  nodes: Node[];
};

export const WixRichContent = ({ nodes }: Props) => {
  return (
    <div>
      {nodes.map((node) => (
        <ContentNode key={node.id} node={node} />
      ))}
    </div>
  );
};

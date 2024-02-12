import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const maxChars = 300;
  //   const wordCount = children.trim().split(/\s+/).length;

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const text = isExpanded ? children : children.substring(0, maxChars) + '... ';

  return (
    <>
      <Text>
        {text}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;

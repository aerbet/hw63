import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

interface ShortPostProps {
  title: string;
  description: string;
  readClicked: () => void;
}

const ShortPost: React.FC<ShortPostProps> = ({ title, description, readClicked }) => {
  return (
    <Card body>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
      <Button onClick={readClicked}>Read</Button>
    </Card>
  );
};

export default ShortPost;
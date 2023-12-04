import { Card } from "react-bootstrap";
import { CSSProperties } from "react";

interface BookProps {
  title: string;
  author: string;
  imageSrc: string;
  id: number;
  getBook: (id: number) => void;
}

export default function Book({ title, author, imageSrc, id }: BookProps) {
  const inlineCardTitleStyle: CSSProperties = {
    color: "#617d98",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "0.85rem",
  };

  return (
    <article className="book">
      <Card style={{ width: "25rem" }}>
        <div className="number">{id}</div>
        <Card.Img
          variant="top"
          src={imageSrc}
          style={{ padding: "2rem 2rem 0" }}
        />
        <Card.Body>
          <Card.Text>{title}</Card.Text>
          <Card.Title style={inlineCardTitleStyle}>{author}</Card.Title>
        </Card.Body>
      </Card>
    </article>
  );
}

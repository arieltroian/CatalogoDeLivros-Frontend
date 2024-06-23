import "./card.css";

interface CardProps {
  price: number;
  title: string;
  author: string;
  image: string;
}

export function Card({ price, image, title, author }: CardProps) {
  return (
    <div className="card">
      <img src={image} />
      <h2 className="card-title">{title}</h2>
      <p className="author">{author}</p>
      <div className="card-info">
        <p className="price">
          <span>R$ </span>
          {price},00
        </p>
      </div>
    </div>
  );
}

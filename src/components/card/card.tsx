import "./card.css";
import { BookData } from "../../interface/BookData";
import { EditModal } from "../modal/edit-modal";
import { useState } from "react";

interface CardProps {
  price: number;
  title: string;
  author: string;
  image: string;
  book: BookData;
}

export function Card({ price, image, title, author, book }: CardProps) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const handleOpenEditModal = () => {
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

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
        <button className="details-button" onClick={handleOpenEditModal}>
          Editar
        </button>
        {isEditModalOpen && (
          <EditModal book={book} closeModal={handleCloseEditModal} />
        )}
      </div>
    </div>
  );
}

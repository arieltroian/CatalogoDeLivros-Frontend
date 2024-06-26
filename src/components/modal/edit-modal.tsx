import { useState } from "react";
import {
  useBookDataDelete,
  useBookDataUpdate,
} from "../../hooks/useBookDataMutate";
import { BookData } from "../../interface/BookData";
import "./edit-modal.css";

interface EditModalProps {
  book: BookData;
  closeModal: () => void;
}

export function EditModal({ book, closeModal }: EditModalProps) {
  const updateMutation = useBookDataUpdate();
  const deleteMutation = useBookDataDelete();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [price, setPrice] = useState(book.price);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleUpdate = () => {
    updateMutation.mutate({ ...book, title, author, price });
    closeModal();
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteMutation.mutate(book.id);
    closeModal();
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Editar Livro</h2>
        <form className="input-container">
          <label>
            Título:
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Autor:
            <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
        </form>
        <div className="modal-actions">
          <button onClick={handleUpdate}>Salvar</button>
          <button onClick={handleDelete}>Deletar</button>
          <button onClick={closeModal}>Cancelar</button>
        </div>
        {showConfirmation && (
          <div className="delete-confirmation">
            <p>Deseja realmente deletar este livro?</p>
            <div className="delete-buttons">
              <button onClick={confirmDelete}>Deletar</button>
              <button onClick={cancelDelete}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

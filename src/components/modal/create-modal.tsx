import { useState } from "react";
import { useBookDataMutate } from "../../hooks/useBookDataMutate";
import { BookData } from "../../interface/BookData";
import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function CreateModal() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const { mutate } = useBookDataMutate();

  const submit = () => {
    const bookData: BookData = {
      title,
      author,
      price,
      image,
    };
    mutate(bookData);
  };
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um livro no catálogo</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="author" value={author} updateValue={setAuthor} />
          <Input label="price" value={price} updateValue={setPrice} />
          <Input label="image" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Enviar
        </button>
      </div>
    </div>
  );
}

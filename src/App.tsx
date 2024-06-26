import "./App.css";
import { useState } from "react";
import { Card } from "./components/card/card";
import { useBookData } from "./hooks/useBookData";
import { CreateModal } from "./components/modal/create-modal";

function App() {
  const { data } = useBookData();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Catálogo de Livros</h1>
      <div className="card-grid">
        {data?.map((bookData) => (
          <Card
            key={bookData.id}
            title={bookData.title}
            author={bookData.author}
            price={bookData.price}
            image={bookData.image}
            book={bookData}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button className="create-modal" onClick={handleOpenModal}>
        Novo
      </button>
    </div>
  );
}

export default App;

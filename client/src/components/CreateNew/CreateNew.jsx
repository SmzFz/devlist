import { useContext, useState } from "react";
import Title from "../Title/Title";
import styles from "./CreateNew.module.css";

import addIcon from "../../assets/icon-add.svg";
import { AppContext } from "../../AppContent";

const CreateNew = () => {
  const [inputValue, setinputValue] = useState("");
  const [error, setError] = useState(false);
  const { handleAddTask } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length) {
      handleAddTask(inputValue);
      setinputValue("");
    } else setError(true);
  };
  const handleChange = (e) => {
    if (error) setError(false);
    setinputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Title iconNome={"pencil"} text={"Criar nova tarefa"} />
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input
          className={styles.inputText}
          type="text"
          autoFocus
          placeholder="Nome da Tarefa"
          value={inputValue}
          onChange={handleChange}
        />
        <button className={styles.addButton} type="submit">
          <img src={addIcon} alt="Adicionar Tarefa" />
        </button>
      </form>
    </div>
  );
};

export default CreateNew;

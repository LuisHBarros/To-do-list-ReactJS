import styles from "./Body.module.css";
import plus from "../assets/plus.svg";
import { useState } from "react";
import clipboard from "../assets/Clipboard.svg";

export function Body() {
  const [isTyping, setIsTyping] = useState("");

  function handleOnChange(event) {
    setIsTyping(event.target.value);
    console.log(isTyping);
  }

  return (
    <section className={styles.Main}>
      <form action="">
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={
              isTyping !== "" ? styles["is-typing"] : styles["is-not-typing"]
            }
            onChange={handleOnChange}
          />
          <span>Descrição da tarefa |</span>
        </div>
        <button formAction="submit">
          Criar <img src={plus} title="sinal de mais" />{" "}
        </button>
      </form>
      <section className={styles.tasks}>
        <div className={styles["tasks-management"]}>
          <p>
            Tarefas criadas <span>{}</span>
          </p>
          <p>
            Tarefas concluídas <span>{}</span>
          </p>
        </div>
        {
          <div className={styles["empty-tasks"]}>
            <img src={clipboard} alt="Ícone de um clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        }
        {/* <div className={styles["tasks-list"]}></div> */}
      </section>
    </section>
  );
}

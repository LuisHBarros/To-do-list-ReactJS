import styles from "./Body.module.css";
import plus from "../assets/plus.svg";
import { useState, useEffect } from "react";
import clipboard from "../assets/Clipboard.svg";
import { Trash } from "./Trash";

export function Body() {
  const [isTyping, setIsTyping] = useState("");

  const [tasks, setTasks] = useState([]);

  const [tasksDone, setTasksDone] = useState(0);

  useEffect(() => {
    const doneTasks = tasks.filter((task) => task.isDone);
    setTasksDone(doneTasks.length);
  }, [tasks]);

  function handleOnSubmit(event) {
    event.preventDefault();
    const task = {
      id: Math.random(),
      description: isTyping,
      isDone: false,
    };
    setIsTyping("");
    setTasks([...tasks, task]);
  }

  function handleOnChange(event) {
    setIsTyping(event.target.value);
  }

  function handleOnDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleOnCheck(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });
    console.log(newTasks);
    setTasks(newTasks);
  }

  return (
    <section className={styles.main}>
      <form onSubmit={handleOnSubmit}>
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={
              isTyping !== "" ? styles["is-typing"] : styles["is-not-typing"]
            }
            onChange={handleOnChange}
            value={isTyping}
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
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Tarefas concluídas <span>{tasksDone + " de " + tasks.length}</span>
          </p>
        </div>
        {tasks.length === 0 ? (
          <div className={styles["empty-tasks"]}>
            <img src={clipboard} alt="Ícone de um clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className={styles["tasks-list"]}>
            {tasks.map((task) => (
              <div
                key={task.id}
                className={
                  tasks.filter((task) => task.isDone).length > 0
                    ? styles["is-done"]
                    : ""
                }
              >
                <article className={styles["task-item"]}>
                  <div>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onChange={() => handleOnCheck(task.id)}
                    />
                  </div>
                  <span>{task.description}</span>
                  <button onClick={() => handleOnDelete(task.id)}>
                    <Trash />
                  </button>
                </article>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

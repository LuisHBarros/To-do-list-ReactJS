import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Body } from "./components/Body";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Body />
      <footer>
        <p>
          Feito por:{" "}
          <a
            href="https://www.linkedin.com/in/luis-henrique-de-barros-207929226/"
            target="_blank"
            rel="noreferrer"
          >
            Luis Henrique de Barros
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

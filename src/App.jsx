import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Body } from "./components/Body";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Body />
    </div>
  );
}

export default App;

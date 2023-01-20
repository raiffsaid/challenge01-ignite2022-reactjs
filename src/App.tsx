import './global.css';
import styles from './App.module.css';
import { Header } from './Header';
import { InputArea } from './InputArea';

function App() {
  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <InputArea />

          <div className={styles.listContainer}>
            <span>Tarefas criadas</span>
            <span>Concluídas</span>
          </div>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default App

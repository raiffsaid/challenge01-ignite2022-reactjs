import './global.css';
import styles from './App.module.css';
import { Header } from './Header';
import { InputArea } from './InputArea';
import { TaskArea } from './TaskArea';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(0);
  const [finishedTasks, setFinishedTasks] = useState(0);

  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <InputArea tasks={tasks} setTasks={setTasks} />

          <TaskArea tasks={tasks} />
        </div>
      </main>
    </>
  )
}

export default App

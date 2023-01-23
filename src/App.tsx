import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { InputArea } from './components/InputArea';
import { TaskArea } from './components/TaskArea';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [finishedTasks, setFinishedTasks] = useState(0);

  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <InputArea tasks={tasks} setTasks={setTasks} />

          <TaskArea tasks={tasks} setTasks={setTasks} finishedTasks={finishedTasks} />
        </div>
      </main>
    </>
  )
}

export default App

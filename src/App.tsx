import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { InputArea } from './components/InputArea';
import { TaskArea } from './components/TaskArea';
import { useState } from 'react';

export interface ITask {
    id: string;
    title: string;
    isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <Header />

      <main>
        <div className={styles.container}>
          <InputArea tasks={tasks} setTasks={setTasks} />

          <TaskArea tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </>
  )
}

export default App

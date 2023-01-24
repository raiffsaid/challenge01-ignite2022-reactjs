import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { InputArea } from './components/InputArea';
import { TaskArea } from './components/TaskArea';
import { useEffect, useState } from 'react';

export interface ITask {
    id: string;
    title: string;
    isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const storageTasks = localStorage.getItem('tasks');

  useEffect(() => {
    if (storageTasks) setTasks(JSON.parse(storageTasks));
  }, []);

  useEffect(() => {
    if (tasks) localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.wrapper}>
      <Header />

      <main>
        <div className={styles.container}>
          <InputArea tasks={tasks} setTasks={setTasks} />

          <TaskArea tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </div>
  )
}

export default App

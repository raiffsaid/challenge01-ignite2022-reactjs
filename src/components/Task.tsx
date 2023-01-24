import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import { ITask } from '../App';
import { useState } from 'react';

interface TaskProps {
  task: ITask;
  onDeleteTask: (task: string) => void;
  onCompleteTask: (task: ITask) => void;
  finishedTasks: number;
  setFinishedTasks(task: number): void;
}

export function Task({ task, onDeleteTask, onCompleteTask, setFinishedTasks, finishedTasks }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task.id);
    if (isChecked) setFinishedTasks(finishedTasks - 1);
  }

  function handleCompleteTask() {
    setIsChecked(!isChecked);
    onCompleteTask(task);
  }

  return (
    <div className={styles.taskItem}>
      <input type="checkbox" name="" id="" checked={isChecked} onChange={handleCompleteTask} />
      
      {task.isComplete ? (<p id={styles.taskCompleted}>{task.title}</p>) : (<p>{task.title}</p>)}
      
      <button onClick={handleDeleteTask} title="Excluir">
        <Trash size={24} />
      </button>
    </div>
  );
}
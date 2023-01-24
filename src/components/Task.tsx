import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import { ITask } from '../App';
import { useState } from 'react';

interface TaskProps {
  task: ITask;
  onDeleteTask: (task: string) => void;
  onCompleteTask: (task: ITask) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCompleteTask() {
    onCompleteTask(task);
  }

  return (
    <div className={styles.taskItem}>
      <input type="checkbox" checked={task.isComplete} onChange={handleCompleteTask} />
      
      {task.isComplete ? (<p id={styles.taskCompleted}>{task.title}</p>) : (<p>{task.title}</p>)}
      
      <button onClick={handleDeleteTask} title="Excluir">
        <Trash size={24} />
      </button>
    </div>
  );
}
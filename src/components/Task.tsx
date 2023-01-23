import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.taskItem}>
      
      <input type="checkbox" name="" id="" />
      
      <p>{content}</p>
      
      <button onClick={handleDeleteTask} title="Excluir">
        <Trash size={24} />
      </button>
    </div>
  );
}
import styles from './TaskArea.module.css';
import clipboardImg from './assets/Clipboard.svg';

interface TaskAreaProps {
  tasks: number;
}

export function TaskArea({ tasks }: TaskAreaProps) {
  return (
    <>
      <div className={styles.listContainer}>
        <span>Tarefas criadas <span className={styles.span}>{tasks}</span></span>
        <span>Concluídas <span className={styles.span}>0</span></span>
      </div>

      <div className={styles.taskContainer}>
        <div className={styles.emptyTaskContainer}>
          <img src={clipboardImg} />

          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  );
}
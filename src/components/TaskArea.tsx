import styles from './TaskArea.module.css';
import clipboardImg from '../assets/Clipboard.svg';
import { Task } from './Task';

interface TaskAreaProps {
  tasks: string[];
  setTasks(task: string[]): void;
  finishedTasks: number;
}

export function TaskArea({ tasks, setTasks, finishedTasks }: TaskAreaProps) {
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <div className={styles.listContainer}>
        <span>Tarefas criadas <span className={styles.span}>{tasks.length}</span></span>
        <span>Concluídas <span className={styles.span}>{finishedTasks}</span></span>
      </div>

      {tasks.length > 0 ? 
        (tasks.map((task) => (
          <Task
            key={task} 
            content={task}
            onDeleteTask={deleteTask}
          />
        ))) 
        : 
        (
          <div className={styles.taskContainer}>
            <div className={styles.emptyTaskContainer}>
              <img src={clipboardImg} />

              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )
      }
    </>
  );
}
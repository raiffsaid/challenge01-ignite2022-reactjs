import styles from './TaskArea.module.css';
import clipboardImg from '../assets/Clipboard.svg';
import { Task } from './Task';
import { ITask } from '../App';
import { useState } from 'react';

interface TaskAreaProps {
  tasks: {
    id: string;
    title: string;
    isComplete: boolean;
  }[];
  setTasks(task: {}): void;
}

export function TaskArea({ tasks, setTasks }: TaskAreaProps) {
  const [finishedTasks, setFinishedTasks] = useState(0);

  function deleteTask(taskToDeleteId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => (task.id !== taskToDeleteId));

    setTasks(tasksWithoutDeletedOne);
  }

  function completeTask(taskComplete: ITask) {
    let newTaskList = [...tasks];

    const newTaskComplete = tasks.findIndex(task => task.id === taskComplete.id);

    newTaskList[newTaskComplete] = {
      ...newTaskList[newTaskComplete], 
      isComplete: !newTaskList[newTaskComplete].isComplete
    };

    newTaskList[newTaskComplete].isComplete ? (setFinishedTasks((state) => (state + 1))) : (setFinishedTasks((state) => (state - 1)));

    setTasks(newTaskList);
  }

  return (
    <>
      <div className={styles.listContainer}>
        <span>Tarefas criadas <span>{tasks.length}</span></span>
        <span>Concluídas <span>{tasks.length > 0 ? (`${finishedTasks} de ${tasks.length}`) : (finishedTasks)}</span></span>
      </div>

      {tasks.length > 0 ? 
        (tasks.map((task) => (
          <Task
            key={task.id} 
            task={task}
            onDeleteTask={deleteTask}
            onCompleteTask={completeTask}
            finishedTasks={finishedTasks}
            setFinishedTasks={setFinishedTasks}
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
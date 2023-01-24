import styles from './InputArea.module.css';
import buttonImg from '../assets/plus.svg';
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react';
import { ITask } from '../App';
import { v4 as uuidv4 } from 'uuid';

interface InputAreaProps {
  tasks: ITask[];
  setTasks(task: {}): void;
}

export function InputArea({ tasks, setTasks }: InputAreaProps) {
  
  const [titleText, setTitleText] = useState('');

  const isInputAreaEmpty = titleText.length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks([...tasks, {
      id: uuidv4(),
      title: titleText,
      isComplete: false
    }]);

    setTitleText('');
  }

  function handleTitleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleText(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Adicione uma nova tarefa" value={titleText} onChange={handleTitleTextChange}/>
        <button type="submit" disabled={isInputAreaEmpty}>
          Criar <span><img src={buttonImg}/></span>
        </button>
      </form>
    </div>
  );
}
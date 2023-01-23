import styles from './InputArea.module.css';
import buttonImg from '../assets/plus.svg';
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react';

interface InputAreaProps {
  tasks: string[];
  setTasks(task: string[]): void;
}

export function InputArea({ tasks, setTasks }: InputAreaProps) {
  
  const [titleText, setTitleText] = useState('');

  const isInputAreaEmpty = titleText.length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([...tasks, titleText]);
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
import styles from './InputArea.module.css';
import buttonImg from './assets/plus.svg';
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react';

interface InputAreaProps {
  tasks: number;
  setTasks(task: number): void;
}

export function InputArea({ tasks, setTasks }: InputAreaProps) {
  
  const [titleText, setTitleText] = useState('');

  const isInputAreaEmpty = titleText.length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Tarefa ${titleText} criada`);
    setTasks(tasks + 1);
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
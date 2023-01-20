import styles from './InputArea.module.css';
import buttonImg from './assets/plus.svg';

export function InputArea() {
  return (
    <div className={styles.wrapper}>
      <form action="">
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">
          Criar <span><img src={buttonImg}/></span>
        </button>
      </form>
    </div>
  );
}
import styles from './Header.module.css';
import logoImg from './assets/Logo.svg';

export function Header() {
  return (
    <div className={styles.container}>
        <img src={logoImg} alt="toDo logo" />
    </div>
  )
}
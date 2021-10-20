import styles from './App.module.scss'
import { LoginBox, MessageList } from './components'

export function App() {
  return (
    <main className={styles.wrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

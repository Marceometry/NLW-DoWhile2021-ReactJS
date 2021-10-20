import styles from './App.module.scss'
import { LoginBox, MessageList, SendMessageForm } from './components'
import { useAuth } from './contexts/AuthContext'

export function App() {
  const { user } = useAuth()

  return (
    <main className={styles.wrapper}>
      <MessageList />

      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}

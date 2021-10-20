import { LoginBox, MessageList, SendMessageForm } from './components'
import { useAuth } from './contexts/AuthContext'
import styles from './styles/App.module.scss'

export function App() {
  const { user } = useAuth()

  return (
    <main
      className={`${styles.wrapper} ${!!user ? styles.signedInContent : ''}`}
    >
      <MessageList />

      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}

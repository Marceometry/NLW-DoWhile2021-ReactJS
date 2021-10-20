import { FormEvent, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { useAuth } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const { user, signOut } = useAuth()

  async function handleSendMessage(e: FormEvent) {
    e.preventDefault()

    if (!message.trim()) return

    await api.post('messages', { message })

    setMessage('')
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.signOutButton} onClick={signOut}>
        <VscSignOut size='32' />
      </button>

      <header className={styles.userInfo}>
        <div className={styles.userAvatar}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className={styles.userName}>{user?.name}</strong>

        <span className={styles.userGithub}>
          <VscGithubInverted size='16' />
          {user?.login}
        </span>
      </header>

      <form
        className={styles.sendMessageForm}
        onSubmit={(e) => handleSendMessage(e)}
      >
        <label htmlFor='message'>Mensagem</label>

        <textarea
          name='message'
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Qual a sua expectativa para o evento?'
        />

        <button type='submit' disabled={!message}>
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}

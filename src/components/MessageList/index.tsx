import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Message } from './types'

import logo from '../../assets/logo.svg'
import styles from './styles.module.scss'

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(({ data }) => {
      setMessages(data)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='Logo' />

      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li className={styles.message} key={message.id}>
            <p className={styles.content}>{message.text}</p>

            <div className={styles.user}>
              <div className={styles.avatar}>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>

              <span className={styles.username}>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { api } from '../../services/api'
import { Message } from './types'

import logo from '../../assets/logo.svg'
import styles from './styles.module.scss'

const messagesQueue: Message[] = []
const socket = io('http://localhost:4000')
socket.on('new_message', (message: Message) => messagesQueue.push(message))

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const updateMessages = () => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        )
        messagesQueue.shift()
      }
    }

    const timer = setInterval(updateMessages, 3000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(({ data }) => {
      setMessages(data)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='Logo' />

      {messages.length > 0 ? (
        <ul className={styles.messageList}>
          {messages.map((message) => (
            <li key={message.id} className={styles.message}>
              <p className={styles.content}>{message.text}</p>

              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>

                <a
                  rel='noffolow'
                  target='_blank'
                  className={styles.username}
                  href={`https://github.com/${message.user.login}`}
                >
                  {message.user.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyList}>
          <h1>Não há mensagens</h1>
        </div>
      )}
    </div>
  )
}

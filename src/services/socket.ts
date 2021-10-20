import { Message } from '../components/MessageList/types'
import io from 'socket.io-client'

export const messagesQueue: Message[] = []

const url = `${import.meta.env.VITE_BASE_URL}`

const socket = io(url || 'http://localhost:4000')

socket.on('new_message', (message: Message) => messagesQueue.push(message))

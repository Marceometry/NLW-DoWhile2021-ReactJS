import { VscGithubInverted } from 'react-icons/vsc'
import { useAuth } from '../../contexts/AuthContext'
import styles from './styles.module.scss'

export function LoginBox() {
  const { signInUrl } = useAuth()

  return (
    <div className={styles.wrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>

      <a href={signInUrl} className={styles.signIn}>
        <VscGithubInverted size='24' />
        Entrar com Github
      </a>
    </div>
  )
}

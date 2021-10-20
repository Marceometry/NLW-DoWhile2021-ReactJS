import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss'

export function LoginBox() {
  return (
    <div className={styles.wrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>

      <a href="#" className={styles.signIn}>
        <VscGithubInverted size='24' />
        Entrar com Github
      </a>
    </div>
  )
}

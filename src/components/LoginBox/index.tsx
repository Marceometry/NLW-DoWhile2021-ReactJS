import { VscGithubInverted } from 'react-icons/vsc'
import { useAuth } from '../../contexts/AuthContext'
import styles from './styles.module.scss'

export function LoginBox() {
  const { signInUrl, isLoading, setIsLoading } = useAuth()

  function signIn() {
    setIsLoading(true)
    window.location.assign(signInUrl)
  }

  return (
    <div className={styles.wrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>

      <button onClick={() => signIn()} className={styles.signIn}>
        {isLoading ? (
          'Carregando...'
        ) : (
          <>
            <VscGithubInverted size='24' />
            Entrar com Github
          </>
        )}
      </button>
    </div>
  )
}

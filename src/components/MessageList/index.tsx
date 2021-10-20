import styles from './styles.module.scss'
import logo from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='Logo' />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quasi veniam maiores ipsam accusamus. Est, vero harum provident sed
            illo sapiente dolorum debitis quidem iusto molestiae molestias quae.
            Magnam, illo.
          </p>

          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src="https://github.com/Marceometry.png" alt="Avatar" />
            </div>

            <span className={styles.username}>Marceometry</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quasi veniam maiores ipsam accusamus. Est, vero harum provident sed
            illo sapiente dolorum debitis quidem iusto molestiae molestias quae.
            Magnam, illo.
          </p>

          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src="https://github.com/Marceometry.png" alt="Avatar" />
            </div>

            <span className={styles.username}>Marceometry</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quasi veniam maiores ipsam accusamus. Est, vero harum provident sed
            illo sapiente dolorum debitis quidem iusto molestiae molestias quae.
            Magnam, illo.
          </p>

          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src="https://github.com/Marceometry.png" alt="Avatar" />
            </div>

            <span className={styles.username}>Marceometry</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

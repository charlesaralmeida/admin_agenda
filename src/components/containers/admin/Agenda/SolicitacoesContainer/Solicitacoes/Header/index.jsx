import logo_dga from 'img/LogotipoDGA.png'
import logo_unicamp from 'img/unicamp-logo.png'
import styles from './.module.css'

const Header = () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <img alt="logo" className={styles.logo_dga} src={logo_dga} />
            Diretoria Geral de Administração
            <img
                alt="logo"
                className={styles.logo_unicamp}
                src={logo_unicamp}
            />
        </div>
    </div>
)

export default Header

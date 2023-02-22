import logo_dga from 'img/LogotipoDGA.png'
import logo_unicamp from 'img/unicamp-logo.png'
import styles from './.module.css'

const Header = () => (
    <div className={styles.container}>
        <img alt="logo" className={styles.logo_dga} src={logo_dga} />
        Formulário de Execução de Serviços
        <img alt="logo" className={styles.logo_unicamp} src={logo_unicamp} />
    </div>
)

export default Header

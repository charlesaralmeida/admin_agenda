import logo_unicamp from 'img/LogotipoDGA.png'
import styles from './.module.css'

const OSHeader = () => (
    <div className={styles.content_os_header}>
        <div className={styles.content_os_id}>
            <p className={styles.content_os_id_title}>
                Ordem de Serviço nº
                <span className={styles.os_service_id}></span>
            </p>
            <p>Transportes/DGA</p>
        </div>
        <img alt="logo" className={styles.content_os_logo} src={logo_unicamp} />
    </div>
)

export default OSHeader

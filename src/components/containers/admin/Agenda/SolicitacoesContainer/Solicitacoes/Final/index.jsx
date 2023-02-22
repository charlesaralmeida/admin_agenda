import styles from './.module.css'

const Final = () => (
    <div className={styles.container}>
        <div className={styles.header}>DESTINO FINAL</div>
        <div className={styles.columns}>
            <div className={styles.field}>
                Local/Destino:
                <div className={styles.info}>DRS X</div>
            </div>
            <div className={styles.field}>
                Endereço:
                <div className={styles.info}>RUA TRABALHO, 602</div>
            </div>
            <div className={styles.field}>
                Município:
                <div className={styles.info}>PIRACICABA</div>
                <div className={styles.info}>SP</div>
            </div>
        </div>
    </div>
)

export default Final

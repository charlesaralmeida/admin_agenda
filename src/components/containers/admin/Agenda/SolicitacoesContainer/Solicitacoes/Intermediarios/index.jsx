import styles from './.module.css'

const Intermediarios = () => (
    <div className={styles.container}>
        <div className={styles.header}>DESTINO(S) INTERMEDIÁRIO(S)</div>
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
        <hr style={{ color: 'black', width: '100%', height: '1px' }} noshade />
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
                <div className={styles.info}>PIRACICABA</div>/
                <div className={styles.info}>SP</div>
            </div>
        </div>
        <hr style={{ color: 'black', width: '100%', height: '1px' }} noshade />
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
                <div className={styles.info}>PIRACICABA</div>/
                <div className={styles.info}>SP</div>
            </div>
        </div>
    </div>
)

export default Intermediarios

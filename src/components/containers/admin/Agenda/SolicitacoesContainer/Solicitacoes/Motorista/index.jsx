import styles from './.module.css'

const Motorista = () => (
    <div className={styles.container}>
        <div className={styles.header}>ALOCAÇÃO DE VEÍCULO/MOTORISTA</div>
        <div className={styles.line}>
            <div className={styles.field}>
                Tipo de Veículo:
                <div className={styles.info}>FURGÃO</div>
            </div>
            <div className={styles.field}>
                Frota:
                <div className={styles.info}>543</div>
            </div>
            <div className={styles.field}>
                Placa:
                <div className={styles.info}>DMN-5466</div>
            </div>
        </div>
        <div className={styles.line}>
            <div className={styles.field}>
                Condutor:
                <div className={styles.info}>OSVALDO ALVES</div>
            </div>
            <div className={styles.field}>
                Matrícula:
                <div className={styles.info}>227650</div>
            </div>
            <div className={styles.field}>
                Telefone Condutor:
                <div className={styles.info}>99882-4927</div>
            </div>
        </div>
    </div>
)

export default Motorista

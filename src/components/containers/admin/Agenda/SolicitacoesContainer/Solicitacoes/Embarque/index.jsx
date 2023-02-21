import styles from './.module.css'

const Embarque = () => (
    <div className={styles.container}>
        <div className={styles.header}>APRESENTAÇÃO DO VEÍCULO/MOTORISTA</div>
        <div className={styles.line_1}>
            <div className={styles.field1}>
                <div>Data Atendimento:</div>
                <div className={styles.info}>15/02/2023</div>
            </div>
            <div className={styles.field2}>
                Qtde. Passageiros:
                <div className={styles.info}>01</div>
            </div>
        </div>
        <div className={styles.line_2}>
            <div className={styles.field1}>
                Hora do Embarque:
                <div className={styles.info}>09:30</div>
            </div>
            <div className={styles.field2}>
                Aguardar retorno:
                <div className={styles.info}>SIM</div>
            </div>
            <div className={styles.field3}>
                Previsão Retorno:
                <div className={styles.info}>15/02/2023 16:00</div>
            </div>
        </div>
        <div className={styles.columns}>
            <div className={styles.field}>
                Local/Apresentação:
                <div className={styles.info}>ALMOXARIFADO/HEMOCENTRO</div>
            </div>
            <div className={styles.field}>
                Endereço:
                <div className={styles.info}>RUA CARLOS CHAGAS, 480</div>
            </div>
            <div className={styles.field}>
                Município:
                <div className={styles.info}>CAMPINAS</div>/
                <div className={styles.info}>SP</div>
            </div>
        </div>
    </div>
)

export default Embarque

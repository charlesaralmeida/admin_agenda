import styles from './.module.css'

const Identificacao = () => (
    <div className={styles.container}>
        <div className={styles.header}>INFORMAÇÕES GERAIS</div>
        <div className={styles.columns}>
            <div className={styles.column}>
                <div className={styles.field}>
                    Solicitação n°:
                    <div className={styles.info}>00011/2023</div>
                </div>
                <div className={styles.field}>
                    Nome Solicitante :
                    <div className={styles.info}>JOãO APARECIDO DOS SANTOS</div>
                </div>
                <div className={styles.field}>
                    Contato Emergência:
                    <div className={styles.info}>999565307</div>
                </div>
                <div className={styles.field}>
                    Recursos:
                    <div className={styles.info}>RECURSO ORCAMENTARIO</div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.field}>
                    Centro de Custo:
                    <div className={styles.info}>HEMO / 3200000000</div>
                </div>
                <div className={styles.field}>
                    Fone Solicitante:
                    <div className={styles.info}>18614</div>
                </div>
                <div className={styles.field}>
                    E-mail Solicitante:
                    <div className={styles.info}>fjbeltra@unicamp.br</div>
                </div>
                <div className={styles.field}>
                    Fone (após exped.):
                    <div className={styles.info}>(19) 99956-5307</div>
                </div>
            </div>
        </div>
        <div className={styles.line}>
            <div className={styles.field}>
                Informações Adicionais:
                <div className={styles.info}>Inform. Adicionais</div>
            </div>
        </div>
        <div className={styles.line}>
            <div className={styles.field}>
                Finalidade:
                <div className={styles.info}>
                    levar documentos para drx e suprimentos para o hemonucleo,
                    aguardar liberaçaõ para retornar
                </div>
            </div>
        </div>
    </div>
)

export default Identificacao

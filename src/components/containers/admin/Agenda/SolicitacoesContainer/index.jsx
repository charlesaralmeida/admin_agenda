import styles from './.module.css'
import Table from 'components/tables/Table'
import useLogic from './useLogic'
import Solicitacoes from './Solicitacoes/Solicitacoes'

import { PDFViewer } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer'

const SolicitacoesContainer = () => {
    const { headers, rows, DocumentToPrint } = useLogic()
    // const { headers, rows } = useLogic()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Table headers={headers} rows={rows} />
            </div>

            {rows.length > 1 ? (
                <p className={styles.quantidade}>{rows.length} solicitações</p>
            ) : rows.length > 0 ? (
                <p className={styles.quantidade}>{rows.length} solicitação</p>
            ) : (
                <p className={styles.zeroquantidade}>
                    Nenhuma solicitação nesta data
                </p>
            )}
            {DocumentToPrint}
            {/* <PDFViewer>
                <Solicitacoes />
            </PDFViewer> */}
        </div>
    )
}

export default SolicitacoesContainer

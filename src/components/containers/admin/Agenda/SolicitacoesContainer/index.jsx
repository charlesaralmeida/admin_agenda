import styles from './.module.css'
import Table from 'components/tables/Table'
import useLogic from './useLogic'
import ButtonRegular from '../../../../buttons/ButtonRegular'
import { COLORS } from '../../../../../utils/constants'

const SolicitacoesContainer = () => {
    const { headers, rows, handlePrintAll } = useLogic()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Table headers={headers} rows={rows} />
            </div>

            {rows.length > 0 ? (
                <div className={styles.bottom}>
                    <div className={styles.button_container}>
                        <ButtonRegular
                            width={'100px'}
                            height={'30px'}
                            handleClick={() => null}
                            label={'Salvar'}
                            color={COLORS.WHITE}
                            backgroundColor={COLORS.PRIMARY}
                        />
                        <ButtonRegular
                            width={'100px'}
                            height={'30px'}
                            handleClick={handlePrintAll}
                            label={'Imprimir todas'}
                            color={COLORS.WHITE}
                            backgroundColor={COLORS.PRIMARY}
                        />
                    </div>
                    <div>
                        {rows.length > 1 ? (
                            <p className={styles.quantidade}>
                                {rows.length} solicitações
                            </p>
                        ) : rows.length > 0 ? (
                            <p className={styles.quantidade}>
                                {rows.length} solicitação
                            </p>
                        ) : null}
                    </div>
                </div>
            ) : null}
            {rows.length === 0 ? (
                <p className={styles.zeroquantidade}>
                    Nenhuma solicitação nesta data
                </p>
            ) : null}
        </div>
    )
}

export default SolicitacoesContainer

import styles from './.module.css'
import useLogic from './useLogic'
import Table from 'components/tables/Table'
import ButtonRegular from '../../../../buttons/ButtonRegular'
import FrotaSelect from '../../../../selects/FrotaSelect'
import MotoristaSelect from '../../../../selects/MotoristaSelect'
import ButtonWithIcon from '../../../../buttons/ButtonWithIcon'
import { ICONS, COLORS } from '../../../../../utils/constants'
import EmpresaSelect from '../../../../selects/EmpresaSelect'

const SolicitacoesContainer = () => {
    const {
        handlePrintAll,
        handlePrint,
        handlePrintOne,
        handleChange,
        checkboxes,
        dados,
        frotas_selecionadas,
        motoristas_selecionados,
        empresas_selecionadas,
        lista_motoristas,
        lista_veiculos,
        lista_empresas,
    } = useLogic()

    const headers = [
        <ButtonWithIcon
            icon={{ name: ICONS.PRINT, size: '1em', color: COLORS.PRIMARY }}
            handleClick={handlePrint}
        />,
        'Horário',
        'Solicitação',
        'Solicitante',
        'Local',
        'Frota',
        'Motorista',
    ]

    const rows = () => {
        const data = []
        let aux = []
        for (let i = 0; i < dados.length; i++) {
            aux[i] = []
            aux[i].push(
                <input
                    type="checkbox"
                    onChange={(event) =>
                        handleChange('checkbox', i, event.target.checked)
                    }
                    checked={checkboxes[i]}
                />
            )
            aux[i].push(
                <>
                    <p>{dados[i].apresentacao.horario_saida}</p>
                    <p>{dados[i].apresentacao.horario_retorno}</p>
                </>
            )
            aux[i].push(
                <div
                    className={styles.numsolicitacao}
                    onClick={() => handlePrintOne(i)}
                >
                    {dados[i].gerais.num_solicitacao}
                </div>
            )
            aux[i].push(dados[i].gerais.unidade)
            aux[i].push(
                <>
                    <p>
                        <u>Embarque:</u> {dados[i].apresentacao.endereco}
                    </p>
                    <p>
                        <u>Destino:</u> {dados[i].destino.endereco}
                    </p>
                </>
            )
            aux[i].push(
                <FrotaSelect
                    handleChange={handleChange}
                    state={frotas_selecionadas[i]}
                    key={i}
                    index={i}
                    keyValue={'frota'}
                    list={lista_veiculos}
                />
            )

            aux[i].push(
                <MotoristaSelect
                    handleChange={handleChange}
                    state={motoristas_selecionados[i]}
                    key={i}
                    index={i}
                    keyValue={'motorista'}
                    list={lista_motoristas}
                />
            )

            aux[i].push(
                <EmpresaSelect
                    handleChange={handleChange}
                    state={empresas_selecionadas[i]}
                    key={i}
                    index={i}
                    keyValue={'empresa'}
                    list={lista_empresas}
                />
            )

            data.push(aux[i])
        }
        return data
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Table
                    headers={headers}
                    rows={rows()}
                    handleChange={handleChange}
                />
            </div>

            {rows().length > 0 ? (
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
                        {rows().length > 1 ? (
                            <p className={styles.quantidade}>
                                {rows().length} solicitações
                            </p>
                        ) : rows().length > 0 ? (
                            <p className={styles.quantidade}>
                                {rows().length} solicitação
                            </p>
                        ) : null}
                    </div>
                </div>
            ) : null}
            {rows().length === 0 ? (
                <p className={styles.zeroquantidade}>
                    Nenhuma solicitação nesta data
                </p>
            ) : null}
        </div>
    )
}

export default SolicitacoesContainer

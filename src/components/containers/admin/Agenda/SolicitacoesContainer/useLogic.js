import { useState } from 'react'
import FrotaSelect from '../../../../selects/FrotaSelect'
import MotoristaSelect from '../../../../selects/MotoristaSelect'
import styles from './.module.css'
import { ICONS, COLORS } from '../../../../../utils/constants'
import ButtonWithIcon from '../../../../buttons/ButtonWithIcon'
import { savePdf, openPdfNewWindow } from 'components/pdf/pdfMake'

import { useSelector } from 'react-redux'
import {
    getDados,
    getListaMotoristas,
    getListaVeiculos,
    getDataSelecionada,
} from 'redux/slices/admin'
import { compareDate, parseDateFromString } from '../../../../../utils'

const useLogic = () => {
    const dados = useSelector(getDados)
    console.log(dados)
    const lista_motoristas = useSelector(getListaMotoristas)
    const lista_veiculos = useSelector(getListaVeiculos)
    const data_selecionada = new Date(
        Date.parse(useSelector(getDataSelecionada))
    )

    const getSolicitacoes = () => {
        let data_atual = data_selecionada
        let dados_index = dados.map((dado, index) => {
            let dado_index = { ...dado }
            dado_index.index = index
            return dado_index
        })
        let dados_data_selecionada = dados_index.filter((dado) => {
            let data_atendimento = new Date(
                parseDateFromString(dado.apresentacao.data_atendimento)
            )
            return compareDate(data_atual, data_atendimento)
        })

        console.log(dados_data_selecionada)
        return dados_data_selecionada
    }

    const [checkbox, setCheckbox] = useState(() =>
        getSolicitacoes().map(() => false)
    )

    const [frota, setFrota] = useState([])
    const [motorista, setMotorista] = useState([])

    const handleMotoristas = (motorista) => {
        setMotorista(motorista)
    }

    const handleFrota = (frota) => {
        setFrota(frota)
    }

    const handlePrint = () => {
        let solicitacoes = getSolicitacoes().filter(
            (solicitacao, index) => checkbox[index]
        )
        if (solicitacoes.length)
            solicitacoes.forEach((detalhes) =>
                savePdf(
                    'Solicitacao ' +
                        detalhes.gerais.num_solicitacao.replace('/', '_'),
                    detalhes
                )
            )
    }

    const handlePrintAll = () => {
        let solicitacoes = getSolicitacoes()
        if (solicitacoes.length)
            solicitacoes.forEach((detalhes) =>
                savePdf(
                    'Solicitacao ' +
                        detalhes.gerais.num_solicitacao.replace('/', '_'),
                    detalhes
                )
            )
    }

    const handleChange = (field, key, value) => {
        let aux = []

        if (field === 'checkbox') {
            aux = checkbox
            aux[key] = value
            setCheckbox(aux)
        }

        if (field === 'frota') {
            aux = frota
            aux[key] = value
            handleFrota(aux)
        }

        if (field === 'motorista') {
            aux = motorista
            aux[key] = value
            handleMotoristas(aux)
        }
    }

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

    const createData = (dados) => {
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
                />
            )
            aux[i].push(
                <>
                    <p>{dados[i].apresentacao.horario_saida}</p>
                    <p>{dados[i].apresentacao.horario_retorno}</p>
                </>
            )
            aux[i].push(
                <div className={styles.numsolicitacao}>
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
                    state={frota[i]}
                    key={i}
                    index={i}
                    keyValue={'frota'}
                    list={lista_veiculos}
                />
            )
            aux[i].push(
                <MotoristaSelect
                    handleChange={handleChange}
                    state={motorista[i]}
                    key={i}
                    index={i}
                    keyValue={'motorista'}
                    list={lista_motoristas}
                />
            )

            data.push(aux[i])
        }
        return data
    }

    const rows = createData(getSolicitacoes())

    return { headers, rows, handlePrintAll }
}

export default useLogic

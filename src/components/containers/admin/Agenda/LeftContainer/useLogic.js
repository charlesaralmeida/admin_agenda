import { parseDateFromString } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import {
    getDataSelecionada,
    getServicoSelecionado,
    getCurrentMonth,
    setServicoSelecionado,
    setDataSelecionada,
    setCurrentMonth,
    setDados,
    getDados,
} from 'redux/slices/admin'
import { getDadosMesAtual, getListas } from '../MainContainer/db'
import { EMPRESAS } from 'utils/constants'

const useLogic = () => {
    const currentMonth = useSelector(getCurrentMonth)
    const dados_mes_atual = useSelector(getDados)
    const lista_servicos = useSelector(getListas).servicos
    const servico_selecionado = useSelector(getServicoSelecionado)
    const data_selecionada = new Date(
        Date.parse(useSelector(getDataSelecionada))
    )

    const dispatch = useDispatch()

    const handleChange = (field, value) => {
        if (field === 'data') dispatch(setDataSelecionada(value.toString()))
        if (field === 'servico') dispatch(setServicoSelecionado(value))
        if (field === 'mes') {
            let current_month = value
            let dados_mes_atual = getDadosMesAtual(current_month)
            dispatch(setCurrentMonth(current_month))
            dispatch(setDados(dados_mes_atual))
        }
    }

    let greenDays = []
    let redDays = []

    //insere os dias em verde
    dados_mes_atual.forEach((dado) => {
        let date = parseDateFromString(dado.apresentacao.data_atendimento)
        if (dado.veiculo_motorista)
            if (dado.veiculo_motorista.empresa_id) {
                if (dado.veiculo_motorista.empresa_id === EMPRESAS.UNICAMP) {
                    if (dado.veiculo_motorista.veiculo_id)
                        if (dado.veiculo_motorista.motorista_id)
                            if (!greenDays.includes(date)) greenDays.push(date)
                } else if (!greenDays.includes(date)) greenDays.push(date)
            }
    })

    //insere os dias em vermelho e retira esses dias da lista de dias verdes
    dados_mes_atual.forEach((dado) => {
        let date = parseDateFromString(dado.apresentacao.data_atendimento)
        if (!dado.veiculo_motorista) {
            if (!redDays.includes(date)) redDays.push(date)
            greenDays = greenDays.filter(
                (e) => e.toString() !== date.toString()
            )
        }
        if (dado.veiculo_motorista) {
            if (!dado.veiculo_motorista.empresa_id)
                if (!redDays.includes(date)) redDays.push(date)

            if (dado.veiculo_motorista.empresa_id)
                if (dado.veiculo_motorista.empresa_id === EMPRESAS.UNICAMP) {
                    if (
                        !dado.veiculo_motorista.veiculo_id ||
                        !dado.veiculo_motorista.motorista_id
                    )
                        if (!redDays.includes(date)) redDays.push(date)
                }
        }
    })

    return {
        lista_servicos,
        servico_selecionado,
        data_selecionada,
        currentMonth,
        handleChange,
        greenDays,
        redDays,
    }
}

export default useLogic

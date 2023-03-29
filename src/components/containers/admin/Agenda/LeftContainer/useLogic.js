import { parseDateFromString } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import {
    getDataSelecionada,
    getServicoSelecionado,
    getCurrentMonth,
    setServicoSelecionado,
    setDataSelecionada,
    setCurrentMonth,
    getDadosMesAtual,
} from 'redux/slices/admin'
import { getListas } from '../MainContainer/db'

const useLogic = () => {
    const dados_mes_atual = useSelector(getDadosMesAtual)
    const lista_servicos = useSelector(getListas).servicos
    const servico_selecionado = useSelector(getServicoSelecionado)
    const data_selecionada = new Date(
        Date.parse(useSelector(getDataSelecionada))
    )
    const currentMonth = useSelector(getCurrentMonth)
    const dispatch = useDispatch()

    const handleChange = (field, value) => {
        if (field === 'data') dispatch(setDataSelecionada(value.toString()))
        if (field === 'servico') dispatch(setServicoSelecionado(value))
        if (field === 'mes') dispatch(setCurrentMonth(value))
    }

    let greenDays = []
    let redDays = []
    let yellowDays = []

    //insere os dias em verde
    dados_mes_atual.forEach((dado) => {
        let date = parseDateFromString(dado.apresentacao.data_atendimento)
        if (dado.veiculo_motorista) {
            if (dado.veiculo_motorista.veiculo_id) {
                if (dado.veiculo_motorista.motorista_id) {
                    if (!greenDays.includes(date)) greenDays.push(date)
                }
            }
        }
    })

    //insere os dias em vermelho e retira esses dias da lista de dias verdes
    dados_mes_atual.forEach((dado) => {
        let date = parseDateFromString(dado.apresentacao.data_atendimento)
        if (!dado.veiculo_motorista) {
            if (dado.gerais.servico_id === 1) {
                if (!redDays.includes(date)) redDays.push(date)
            } else if (!yellowDays.includes(date)) yellowDays.push(date)

            greenDays = greenDays.filter(
                (e) => e.toString() !== date.toString()
            )
        }
        if (dado.veiculo_motorista) {
            if (!dado.veiculo_motorista.veiculo_id) {
                if (dado.gerais.servico_id === 1) {
                    if (!redDays.includes(date)) redDays.push(date)
                } else if (!yellowDays.includes(date)) yellowDays.push(date)

                greenDays = greenDays.filter(
                    (e) => e.toString() !== date.toString()
                )
            }
            if (!dado.veiculo_motorista.motorista_id) {
                if (dado.gerais.servico_id === 1) {
                    if (!redDays.includes(date)) redDays.push(date)
                } else if (!yellowDays.includes(date)) yellowDays.push(date)
                greenDays = greenDays.filter(
                    (e) => e.toString() !== date.toString()
                )
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
        yellowDays,
    }
}

export default useLogic

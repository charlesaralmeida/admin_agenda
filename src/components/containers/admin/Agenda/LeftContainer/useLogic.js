import { parseDateFromString } from 'utils'

import { useDispatch, useSelector } from 'react-redux'
import {
    getDados,
    getTiposServicos,
    getDataSelecionada,
    getServico,
    getCurrentMonth,
    setServico,
    setDataSelecionada,
    setCurrentMonth,
} from 'redux/slices/admin'

const useLogic = () => {
    const dados = useSelector(getDados)
    const tipo_servicos = useSelector(getTiposServicos)
    const servico = useSelector(getServico)
    const data_selecionada = new Date(
        Date.parse(useSelector(getDataSelecionada))
    )
    const currentMonth = useSelector(getCurrentMonth)
    const dispatch = useDispatch()

    const getSolicitacoes = () => {
        return dados
    }

    const getDadosMesAtual = () => {
        const dadosMesAtual = getSolicitacoes().filter(
            (dado) =>
                parseDateFromString(
                    dado.apresentacao.data_atendimento
                ).getMonth() === currentMonth
        )
        return dadosMesAtual
    }

    const handleChange = (field, value) => {
        if (field === 'date') dispatch(setDataSelecionada(value.toString()))
        if (field === 'servico') dispatch(setServico(value))
    }

    const setMonth = (month) => dispatch(setCurrentMonth(month))

    let greenDays = []
    let redDays = []

    //insere os dias em verde
    getDadosMesAtual().forEach((dado) => {
        let date = parseDateFromString(dado.apresentacao.data_atendimento)
        if (dado.veiculo_motorista) greenDays.push(date)
    })

    //insere os dias em vermelho e retira esses dias da lista de dias verdes
    getDadosMesAtual().forEach((dado) => {
        let date = parseDateFromString(dado.apresentacao.data_atendimento)
        if (!dado.veiculo_motorista) {
            redDays.push(date)
            greenDays = greenDays.filter(
                (e) => e.toString() !== date.toString()
            )
        }
    })

    return {
        handleChange,
        data_selecionada,
        greenDays,
        redDays,
        currentMonth,
        setMonth,
        tipo_servicos,
        servico,
    }
}

export default useLogic

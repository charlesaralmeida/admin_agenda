import { createSlice } from '@reduxjs/toolkit'
import { PAGES } from '../../utils/constants'
import { parseDateFromString, compareDate } from '../../utils'
import { getDadosMesAtual } from '../../components/containers/admin/Agenda/MainContainer/db.js'

const initialState = {
    currentPage: PAGES.ADMIN,
    dados: getDadosMesAtual(new Date(Date.now()).getMonth()),
    servico_selecionado_id: 1,
    frotas_selecionadas: [],
    motoristas_selecionados: [],
    empresas_selecionadas: [],
    data_selecionada: new Date(Date.now()).toString(),
    current_month: new Date(Date.now()).getMonth(),
}

const getDadosHoje = () => {
    let data_atual = new Date(Date.now())
    let dados_data_selecionada = initialState.dados.filter((dado) => {
        let data_atendimento = new Date(
            parseDateFromString(dado.apresentacao.data_atendimento)
        )
        return compareDate(data_atual, data_atendimento)
    })

    let dados_servico_selecionado = dados_data_selecionada.filter(
        (dado) => dado.gerais.servico_id === initialState.servico_selecionado_id
    )

    return dados_servico_selecionado
}

initialState.frotas_selecionadas = getDadosHoje().map((dado) => {
    if (dado.veiculo_motorista)
        if (dado.veiculo_motorista.veiculo_id)
            return dado.veiculo_motorista.veiculo_id
                ? dado.veiculo_motorista.veiculo_id
                : ''
})

initialState.motoristas_selecionados = getDadosHoje().map((dado) => {
    if (dado.veiculo_motorista)
        if (dado.veiculo_motorista.motorista_id)
            return dado.veiculo_motorista.motorista_id
                ? dado.veiculo_motorista.motorista_id
                : ''
})

initialState.empresas_selecionadas = getDadosHoje().map((dado) => {
    if (dado.veiculo_motorista) {
        if (dado.veiculo_motorista.empresa_id)
            return dado.veiculo_motorista.empresa_id
                ? dado.veiculo_motorista.empresa_id
                : ''
    }
})

export const slice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setPage(state, { payload }) {
            return {
                ...state,
                currentPage: payload,
            }
        },
        setDados(state, { payload }) {
            return {
                ...state,
                dados: payload,
            }
        },
        setServicoSelecionado(state, { payload }) {
            return {
                ...state,
                servico_selecionado_id: payload,
            }
        },
        setDataSelecionada(state, { payload }) {
            return {
                ...state,
                data_selecionada: payload,
            }
        },
        setCurrentMonth(state, { payload }) {
            return {
                ...state,
                current_month: payload,
            }
        },
        setFrotasSelecionadas(state, { payload }) {
            return {
                ...state,
                frotas_selecionadas: payload,
            }
        },
        setMotoristasSelecionados(state, { payload }) {
            return {
                ...state,
                motoristas_selecionados: payload,
            }
        },
    },
})

export const {
    setPage,
    setDados,
    setFrota,
    setMotorista,
    setServicoSelecionado,
    setDataSelecionada,
    setCurrentMonth,
    setFrotasSelecionadas,
    setMotoristasSelecionados,
} = slice.actions

export const getState = (state) => state.admin
export const getServicoSelecionado = (state) =>
    state.admin.servico_selecionado_id
export const getDataSelecionada = (state) => state.admin.data_selecionada
export const getFrotasSelecionadas = (state) => state.admin.frotas_selecionadas
export const getMotoristasSelecionados = (state) =>
    state.admin.motoristas_selecionados
export const getEmpresasSelecionadas = (state) =>
    state.admin.empresas_selecionadas
export const getCurrentMonth = (state) => state.admin.current_month

export const getDados = (state) => state.admin.dados

export const getDadosDataAtual = (state) => {
    let data_atual = new Date(state.admin.data_selecionada)
    let dados_data_selecionada = state.admin.dados.filter((dado) => {
        let data_atendimento = new Date(
            parseDateFromString(dado.apresentacao.data_atendimento)
        )
        return compareDate(data_atual, data_atendimento)
    })

    let dados_servico_selecionado = dados_data_selecionada.filter(
        (dado) => dado.gerais.servico_id === state.admin.servico_selecionado_id
    )

    return dados_servico_selecionado
}

export default slice.reducer

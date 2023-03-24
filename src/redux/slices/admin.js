import { createSlice } from '@reduxjs/toolkit'
import { PAGES } from '../../utils/constants'

const lista_motoristas = ['Claudio Cabreuva da Silva', 'Alberto', 'Silas']

const tipo_servicos = [
    'Frota Oficial',
    'Ônibus, micro-ônibus e vans - SP e Campinas',
    'Ônibus, micro-ônibus e vans - Interestadual',
    'Carro executivo',
    'Transporte de carga',
    'Táxi',
]

const lista_veiculos = ['C617', 'C18', 'C619']

const initialState = {
    currentPage: PAGES.ADMIN,
    dados: [
        {
            gerais: {
                num_solicitacao: '1045/2023',
                unidade: 'Hemocentro',
                solicitante: {
                    nome: 'JOÃO APARECIDO DOS SANTOS',
                    telefone: '18614',
                    email: 'joao@unicamp.br',
                },
                recursos: {
                    tipo: 'RECURSO ORCAMENTARIO',
                    centro_custo: 'HEMO / 3200000000',
                },
                contato: {
                    emergencia: '999565307',
                    pos_expediente: '(19) 99956-5307',
                },
            },
            apresentacao: {
                data_atendimento: '26/03/2023',
                qtde_passageiros: '01',
                aguardar_retorno: 'SIM',
                data_retorno: '13/02/2023',
                horario_retorno: '15:00',
                horario_saida: '8:00',
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
            },
            intermediarios: [],
            destino: {
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            },
            adicionais: {
                voo: {
                    numero: '7347',
                    horario: '9:30',
                },
                informacoes:
                    'levar suprimentos do hemocentro para o hospital m. gatti',
                finalidade:
                    'levar suprimentos do hemocentro para o hospital m. gatti',
            },
            veiculo_motorista: {
                empresa: 'UNICAMP',
                veiculo: {
                    tipo: 'FURGÃO',
                    frota: '543',
                    placa: 'DMN-5491',
                },
                motorista: {
                    nome: 'OSVALDO ALVES',
                    matricula: '227650',
                    telefone: '99882-4927',
                },
            },
        },
        {
            gerais: {
                num_solicitacao: '1046/2023',
                unidade: 'Hemocentro',
                solicitante: {
                    nome: 'JOÃO APARECIDO DOS SANTOS',
                    telefone: '18614',
                    email: 'joao@unicamp.br',
                },
                recursos: {
                    tipo: 'RECURSO ORCAMENTARIO',
                    centro_custo: 'HEMO / 3200000000',
                },
                contato: {
                    emergencia: '999565307',
                    pos_expediente: '(19) 99956-5307',
                },
            },
            apresentacao: {
                data_atendimento: '13/04/2023',
                qtde_passageiros: '01',
                aguardar_retorno: 'SIM',
                data_retorno: '13/02/2023',
                horario_retorno: '15:00',
                horario_saida: '8:00',
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
            },
            intermediarios: [],
            destino: {
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            },
            adicionais: {
                voo: {
                    numero: '7347',
                    horario: '9:30',
                },
                informacoes:
                    'levar suprimentos do hemocentro para o hospital m. gatti',
                finalidade:
                    'levar suprimentos do hemocentro para o hospital m. gatti',
            },
            veiculo_motorista: {
                empresa: 'UNICAMP',
                veiculo: {
                    tipo: 'FURGÃO',
                    frota: '543',
                    placa: 'DMN-5491',
                },
                motorista: {
                    nome: 'OSVALDO ALVES',
                    matricula: '227650',
                    telefone: '99882-4927',
                },
            },
        },
        {
            gerais: {
                num_solicitacao: '1046/2023',
                unidade: 'Hemocentro',
                solicitante: {
                    nome: 'JOÃO APARECIDO DOS SANTOS',
                    telefone: '18614',
                    email: 'joao@unicamp.br',
                },
                recursos: {
                    tipo: 'RECURSO ORCAMENTARIO',
                    centro_custo: 'HEMO / 3200000000',
                },
                contato: {
                    emergencia: '999565307',
                    pos_expediente: '(19) 99956-5307',
                },
            },
            apresentacao: {
                data_atendimento: '13/04/2023',
                qtde_passageiros: '01',
                aguardar_retorno: 'SIM',
                data_retorno: '13/02/2023',
                horario_retorno: '15:00',
                horario_saida: '8:00',
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
            },
            intermediarios: [],
            destino: {
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            },
            adicionais: {
                voo: {
                    numero: '7347',
                    horario: '9:30',
                },
                informacoes:
                    'levar suprimentos do hemocentro para o hospital m. gatti',
                finalidade:
                    'levar suprimentos do hemocentro para o hospital m. gatti',
            },
            veiculo_motorista: {
                empresa: 'UNICAMP',
                veiculo: {
                    tipo: 'FURGÃO',
                    frota: '543',
                    placa: 'DMN-5491',
                },
                motorista: {
                    nome: 'OSVALDO ALVES',
                    matricula: '227650',
                    telefone: '99882-4927',
                },
            },
        },
    ],
    lista_motoristas: lista_motoristas,
    tipo_servicos: tipo_servicos,
    lista_veiculos: lista_veiculos,
    servico: '',
    data_selecionada: new Date(Date.now()),
    current_month: new Date(Date.now()).getMonth(),
}

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
        setMotorista(state, { payload }) {
            return {
                ...state,
                veiculo_motorista: {
                    ...state.veiculo_motorista,
                    veiculo: {
                        ...state.veiculo_motorista.veiculo,
                        frota: payload,
                    },
                },
            }
        },
        setServico(state, { payload }) {
            return {
                ...state,
                servico: payload,
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
    },
})

export const {
    setPage,
    setMotorista,
    setServico,
    setDate,
    setDataSelecionada,
    setCurrentMonth,
} = slice.actions

export const getState = (state) => state.admin
export const getDados = (state) => state.admin.dados
export const getListaMotoristas = (state) => state.admin.lista_motoristas
export const getTiposServicos = (state) => state.admin.tipo_servicos
export const getListaVeiculos = (state) => state.admin.lista_veiculos
export const getServico = (state) => state.admin.servico
export const getDataSelecionada = (state) => state.admin.data_selecionada
export const getCurrentMonth = (state) => state.admin.current_month

export default slice.reducer

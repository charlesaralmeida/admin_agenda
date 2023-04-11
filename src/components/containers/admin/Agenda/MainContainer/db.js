import { parseDateFromString } from '../../../../../utils'

const dados = [
    {
        gerais: {
            servico_id: 1,
            num_solicitacao: '1045/2023',
            unidade_id: 1,
            solicitante_id: 1,
            recursos_id: 1,
            contato: {
                emergencia: '999565307',
                pos_expediente: '(19) 99956-5307',
            },
        },
        apresentacao: {
            data_atendimento: '03/04/2023',
            qtde_passageiros: '01',
            aguardar_retorno: 'SIM',
            data_retorno: '13/02/2023',
            horario_retorno: '15:00',
            horario_saida: '8:00',
            passageiro: {
                nome: 'FREDERICO JOSé BELTRAMELLY',
                telefone: '(19) 3521-8694',
            },
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
        },
        intermediarios: [
            {
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            },
            {
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            },
        ],
        destino: {
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
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
            empresa_id: 1,
            motorista_id: 1,
            veiculo_id: 3,
        },
    },
    {
        gerais: {
            servico_id: 2,
            num_solicitacao: '1046/2023',
            unidade_id: 1,
            solicitante_id: 1,
            recursos_id: 1,
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
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
        },
        intermediarios: [],
        destino: {
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
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
            empresa_id: 1,
            veiculo_id: 1,
            motorista_id: 2,
        },
    },
    {
        gerais: {
            servico_id: 2,
            num_solicitacao: '1047/2023',
            unidade_id: 1,
            solicitante_id: 1,
            recursos_id: 1,
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
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
        },
        intermediarios: [],
        destino: {
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
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
    },
    {
        gerais: {
            servico_id: 1,
            num_solicitacao: '1049/2023',
            unidade_id: 1,
            solicitante_id: 1,
            recursos_id: 1,
            contato: {
                emergencia: '999565307',
                pos_expediente: '(19) 99956-5307',
            },
        },
        apresentacao: {
            data_atendimento: '25/03/2023',
            qtde_passageiros: '01',
            aguardar_retorno: 'SIM',
            data_retorno: '13/02/2023',
            horario_retorno: '15:00',
            horario_saida: '8:00',
            passageiro: {
                nome: 'FREDERICO JOSé BELTRAMELLY',
                telefone: '(19) 3521-8694',
            },
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
        },
        intermediarios: [
            {
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            },
            {
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco:
                    'Rua Dr. Antonio Augusto de Almeida, 50 - Campinas/SP',
            },
        ],
        destino: {
            referencia: 'ALMOXARIFADO/HEMOCENTRO',
            endereco: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
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
        veiculo_motorista: { empresa_id: 1, veiculo_id: 1, motorista_id: 2 },
    },
]

const lista_empresas = [
    { id: 1, nome: 'UNICAMP' },
    { id: 2, nome: 'MACTUR' },
    { id: 3, nome: 'ITNEROL' },
    { id: 4, nome: 'USE TAXI' },
]

const lista_motoristas = [
    {
        id: 1,
        nome: 'Claudio Cabreuva da Silva',
        matricula: '227.650.444-53',
        telefone: '(19) 99882-4927',
    },
    {
        id: 2,
        nome: 'Alberto',
        matricula: '227650',
        telefone: '99882-4927',
    },
    {
        id: 3,
        nome: 'Silas',
        matricula: '227650',
        telefone: '99882-4927',
    },
    {
        id: 4,
        nome: 'OSVALDO ALVES',
        matricula: '227650',
        telefone: '99882-4927',
    },
]

const lista_servicos = [
    { id: 1, descricao: 'Carro normal', empresa_id: 1 },
    {
        id: 2,
        descricao: 'Ônibus, micro-ônibus e vans - SP e Campinas',
        empresa_id: 3,
    },
    {
        id: 3,
        descricao: 'Ônibus, micro-ônibus e vans - Interestadual',
        empresa_id: 2,
    },
    { id: 4, descricao: 'Carro executivo', empresa_id: 1 },
    { id: 5, descricao: 'Transporte de carga', empresa_id: 1 },
    { id: 6, descricao: 'Táxi', empresa_id: 4 },
]

const lista_veiculos = [
    { id: 1, tipo: 'FURGÃO', frota: 'C617', placa: 'DMN-5491', empresa_id: 1 },
    { id: 2, tipo: 'FURGÃO', frota: 'C618', placa: 'DMN-5491', empresa_id: 1 },
    { id: 3, tipo: 'FURGÃO', frota: 'C619', placa: 'DMN-5491', empresa_id: 1 },
]

const lista_unidades = [{ id: 1, nome: 'Hemocentro' }]

const lista_solicitantes = [
    {
        id: 1,
        nome: 'JOÃO APARECIDO DOS SANTOS',
        telefone: '18614',
        email: 'joao@unicamp.br',
        recursos_id: 1,
    },
]

const lista_recursos = [
    { id: 1, tipo: 'RECURSO ORCAMENTARIO', centro_custo: 'HEMO / 3200000000' },
]

const listas = {
    motoristas: lista_motoristas,
    servicos: lista_servicos,
    veiculos: lista_veiculos,
    empresas: lista_empresas,
    unidades: lista_unidades,
    solicitantes: lista_solicitantes,
    recursos: lista_recursos,
}

export const getEmpresa = (id) =>
    listas.empresas.filter((empresa) => empresa.id === id)[0]
export const getVeiculo = (id) =>
    listas.veiculos.filter((veiculo) => veiculo.id === id)[0]
export const getMotorista = (id) =>
    listas.motoristas.filter((motorista) => motorista.id === id)[0]
export const getServicos = (id) =>
    listas.servicos.filter((servico) => servico.id === id)[0]
export const getUnidade = (id) =>
    listas.unidades.filter((unidade) => unidade.id === id)[0]
export const getSolicitante = (id) =>
    listas.solicitantes.filter((solicitante) => solicitante.id === id)[0]
export const getRecurso = (id) =>
    listas.recursos.filter((recurso) => recurso.id === id)[0]

//recuperar somente dados do mes corrente pra não sobrecarregar
export const getDadosMesAtual = (current_month) => {
    //inserir busca no banco de dados aqui e atribuir a "dados"
    const dadosMesAtual = dados.filter(
        (dado) =>
            parseDateFromString(
                dado.apresentacao.data_atendimento
            ).getMonth() === current_month
    )
    return dadosMesAtual
}

export const getListas = () => listas

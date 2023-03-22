const aux = {
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
        data_atendimento: '13/02/2023',
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
        informacoes: 'levar suprimentos do hemocentro para o hospital m. gatti',
        finalidade: 'levar suprimentos do hemocentro para o hospital m. gatti',
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
}

export const dados = [aux, aux, aux, aux]

export const lista_motoristas = [
    'Claudio Cabreuva da Silva',
    'Alberto',
    'Silas',
]

export const lista_veiculos = ['C617', 'C18', 'C619']

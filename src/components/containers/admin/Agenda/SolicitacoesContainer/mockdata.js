export const dados = [
    {
        num_solicitacao: '1045/2023',
        unidade: 'Hemocentro',
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
        intermediarios: [
            {
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco: 'RUA CARLOS CHAGAS, 480 - UNICAMP - CAMPINAS/SP',
            },
            {
                passageiro: {
                    nome: 'FREDERICO JOSé BELTRAMELLY',
                    telefone: '(19) 3521-8694',
                },
                referencia: 'ALMOXARIFADO/HEMOCENTRO',
                endereco: 'RUA CARLOS CHAGAS, 480 - UNICAMP - CAMPINAS/SP',
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
]

export const lista_motoristas = [
    'Claudio Cabreuva da Silva',
    'Alberto',
    'Silas',
]

export const lista_veiculos = ['C617', 'C18', 'C619']

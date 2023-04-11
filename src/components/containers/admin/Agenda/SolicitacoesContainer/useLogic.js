import { savePdf, openPdfNewWindow } from 'components/pdf/pdfMake'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getDadosDataAtual,
    getFrotasSelecionadas,
    getMotoristasSelecionados,
    getEmpresasSelecionadas,
    getServicoSelecionado,
} from 'redux/slices/admin'

import {
    getListas,
    getEmpresa,
    getMotorista,
    getRecurso,
    getServicos,
    getSolicitante,
    getUnidade,
    getVeiculo,
} from '../MainContainer/db'

const useLogic = () => {
    const dados_data_atual = useSelector(getDadosDataAtual)
    const lista_motoristas = getListas().motoristas
    const lista_veiculos = getListas().veiculos
    const lista_empresas = getListas().empresas
    const servico_selecionado = useSelector(getServicoSelecionado)

    const dispatch = useDispatch()

    const [checkboxes, setCheckBoxes] = useState(
        dados_data_atual.map(() => false)
    )

    const [frotas_selecionadas, setFrotasSelecionadas] = useState(
        useSelector(getFrotasSelecionadas)
    )

    const [motoristas_selecionados, setMotoristasSelecionados] = useState(
        useSelector(getMotoristasSelecionados)
    )

    const [empresas_selecionadas, setEmpresasSelecionadas] = useState(
        useSelector(getEmpresasSelecionadas)
    )

    useEffect(() => {
        setCheckBoxes(dados_data_atual.map(() => false))

        let frotas = dados_data_atual.map((dado) => {
            if (dado.veiculo_motorista)
                if (dado.veiculo_motorista.veiculo_id)
                    return dado.veiculo_motorista.veiculo_id
                        ? dado.veiculo_motorista.veiculo_id
                        : ''
        })
        setFrotasSelecionadas(frotas)

        let motoristas = dados_data_atual.map((dado) => {
            if (dado.veiculo_motorista)
                if (dado.veiculo_motorista.motorista_id)
                    return dado.veiculo_motorista.motorista_id
                        ? dado.veiculo_motorista.motorista_id
                        : ''
        })
        setMotoristasSelecionados(motoristas)

        let empresas = dados_data_atual.map((dado) => {
            if (dado.veiculo_motorista)
                if (dado.veiculo_motorista.empresa_id)
                    return dado.veiculo_motorista.empresa_id
                        ? dado.veiculo_motorista.empresa_id
                        : ''
        })
        setEmpresasSelecionadas(empresas)
    }, [dados_data_atual, servico_selecionado])

    const getDados = () =>
        dados_data_atual.map((dado) => {
            return {
                ...dado,
                gerais: {
                    ...dado.gerais,
                    unidade: getUnidade(dado.gerais.unidade_id).nome,
                },
            }
        })

    const getDetalhes = (dados) => {
        let result = {}
        result.gerais = {
            ...dados.gerais,
            servico: getServicos(dados.gerais.servico_id),
            unidade: getUnidade(dados.gerais.unidade_id),
            solicitante: getSolicitante(dados.gerais.solicitante_id),
            recursos: getRecurso(dados.gerais.recursos_id),
        }
        result.veiculo_motorista = {
            ...dados.veiculo_motorista,
            empresa: getEmpresa(dados.veiculo_motorista.empresa_id),
            veiculo: getVeiculo(dados.veiculo_motorista.veiculo_id),
            motorista: getMotorista(dados.veiculo_motorista.motorista_id),
        }
        return result
    }

    const handlePrint = () => {
        let solicitacoes = dados_data_atual.filter(
            (solicitacao, index) => checkboxes[index]
        )
        if (solicitacoes.length)
            solicitacoes.forEach((dados) => {
                dados = {
                    ...dados,
                    ...getDetalhes(dados),
                }
                savePdf(
                    'Solicitacao ' +
                        dados.gerais.num_solicitacao.replace('/', '_'),
                    dados
                )
            })
    }

    const handlePrintOne = (index) => {
        let dados = [getDados()[index]]

        if (dados.length) {
            let solicitacoes = {
                ...dados[0],
                ...getDetalhes(dados[0]),
            }
            openPdfNewWindow(solicitacoes)
        }
    }

    const handlePrintAll = () => {
        if (dados_data_atual.length)
            dados_data_atual.forEach((dados) => {
                dados = {
                    ...dados,
                    ...getDetalhes(dados),
                }
                savePdf(
                    'Solicitacao ' +
                        dados.gerais.num_solicitacao.replace('/', '_'),
                    dados
                )
            })
    }

    const handleChange = (field, key, value) => {
        if (field === 'checkbox') {
            let aux = [...checkboxes]
            aux[key] = value
            setCheckBoxes(aux)
        }

        if (field === 'frota') {
            let aux = [...frotas_selecionadas]
            aux[key] = parseInt(value)
            setFrotasSelecionadas(aux)
        }

        if (field === 'motorista') {
            let aux = [...motoristas_selecionados]
            aux[key] = parseInt(value)
            setMotoristasSelecionados(aux)
        }

        if (field === 'empresa') {
            let aux = [...empresas_selecionadas]
            aux[key] = parseInt(value)
            setEmpresasSelecionadas(aux)
        }
    }

    const dados = getDados()

    return {
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
    }
}

export default useLogic

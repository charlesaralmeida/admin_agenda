import { useState } from 'react'
import FrotaSelect from '../../../../selects/FrotaSelect'
import MotoristaSelect from '../../../../selects/MotoristaSelect'
import styles from './.module.css'
import { ICONS, COLORS } from '../../../../../utils/constants'
import ButtonWithIcon from '../../../../buttons/ButtonWithIcon'
import { dados, lista_motoristas, lista_veiculos } from './mockdata'
import { savePdf, openPdfNewWindow } from 'components/pdf/pdfMake'

const useLogic = () => {
    const getDados = () => {
        return dados
    }

    const [checkbox, setCheckbox] = useState(() => getDados().map(() => false))

    const [frota, setFrota] = useState([])
    const [motorista, setMotorista] = useState([])

    const handlePrint = () => {
        let dados = getDados().filter((dado, index) => checkbox[index])
        if (dados.length) openPdfNewWindow(dados[0])
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
            setFrota(aux)
        }

        if (field === 'motorista') {
            aux = motorista
            aux[key] = value
            setMotorista(aux)
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

    const getListaMotoristas = () => {
        return lista_motoristas
    }

    const getListaVeiculos = () => {
        return lista_veiculos
    }

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
                    {dados[i].num_solicitacao}
                </div>
            )
            aux[i].push(dados[i].unidade)
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
                    list={getListaVeiculos()}
                />
            )
            aux[i].push(
                <MotoristaSelect
                    handleChange={handleChange}
                    state={motorista[i]}
                    key={i}
                    index={i}
                    keyValue={'motorista'}
                    list={getListaMotoristas()}
                />
            )

            data.push(aux[i])
        }
        return data
    }

    const rows = createData(getDados())

    return { headers, rows }
}

export default useLogic

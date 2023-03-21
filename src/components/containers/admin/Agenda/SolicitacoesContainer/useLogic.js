import { useState, useEffect } from 'react'
import FrotaSelect from '../../../../selects/FrotaSelect'
import MotoristaSelect from '../../../../selects/MotoristaSelect'
import styles from './.module.css'
import { ICONS, COLORS } from '../../../../../utils/constants'
import ButtonWithIcon from '../../../../buttons/ButtonWithIcon'
import { openPdfNewWindow } from 'components/pdf/pdfMake'

const useLogic = () => {
    const [frota, setFrota] = useState([])
    const [motorista, setMotorista] = useState([])
    const handlePrint = openPdfNewWindow

    const handleChange = (field, key, value) => {
        let aux = []
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

    const dados = [
        {
            horario_saida: '8:00',
            horario_retorno: '15:00',
            num_solicitacao: '1045/2023',
            unidade: 'Hemocentro',
            embarque: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            destino: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
        },
        {
            horario_saida: '8:00',
            horario_retorno: '15:00',
            num_solicitacao: '1045/2023',
            unidade: 'Hemocentro',
            embarque: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            destino: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
        },
        {
            horario_saida: '8:00',
            horario_retorno: '15:00',
            num_solicitacao: '1045/2023',
            unidade: 'Hemocentro',
            embarque: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            destino: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
        },
        {
            horario_saida: '8:00',
            horario_retorno: '15:00',
            num_solicitacao: '1045/2023',
            unidade: 'Hemocentro',
            embarque: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            destino: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
        },
        {
            horario_saida: '8:00',
            horario_retorno: '15:00',
            num_solicitacao: '1045/2023',
            unidade: 'Hemocentro',
            embarque: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
            destino: 'Rua Dr. Antonio Augusto de Almeida, 530 - Campinas/SP',
        },
    ]

    const createData = (dados) => {
        const data = []
        let aux = []
        for (let i = 0; i < dados.length; i++) {
            aux[i] = []
            aux[i].push(<input type="checkbox" />)
            aux[i].push(
                <>
                    <p>{dados[i].horario_saida}</p>
                    <p>{dados[i].horario_retorno}</p>
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
                        <u>Embarque:</u> {dados[i].embarque}
                    </p>
                    <p>
                        <u>Destino:</u> {dados[i].destino}
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
                />
            )
            aux[i].push(
                <MotoristaSelect
                    handleChange={handleChange}
                    state={motorista[i]}
                    key={i}
                    index={i}
                    keyValue={'motorista'}
                />
            )

            data.push(aux[i])
        }
        return data
    }

    const rows = createData(dados)

    console.log(headers)
    console.log(rows)

    return { headers, rows }
}

export default useLogic

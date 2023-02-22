import { useState } from 'react'
import FrotaSelect from '../../../../selects/FrotaSelect'
import MotoristaSelect from '../../../../selects/MotoristaSelect'
import styles from './.module.css'
import { ICONS, COLORS } from '../../../../../utils/constants'
import ButtonWithIcon from '../../../../buttons/ButtonWithIcon'
import usePrinter from '../../../../printer'
import Solicitacoes from './Solicitacoes/Solicitacoes'
import ReactPDF from '@react-pdf/renderer'

const useLogic = () => {
    const [frota, setFrota] = useState([])
    const [motorista, setMotorista] = useState([])
    // const { handlePrint, buildDocumentToPrint } = usePrinter()
    // const DocumentToPrint = buildDocumentToPrint(<Solicitacoes />)

    const handlePrint = () => {
        ReactPDF.render(<Solicitacoes />, `${__dirname}/example.pdf`)
    }

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

    const data = []

    const createData = () => {
        let aux = []
        for (let i = 0; i < 10; i++) {
            aux[i] = []
            aux[i].push(<input type="checkbox" />)
            aux[i].push(
                <>
                    <p>8:00</p>
                    <p>15:00</p>
                </>
            )
            aux[i].push(<div className={styles.numsolicitacao}>1045/2023</div>)
            aux[i].push('Hemocentro')
            aux[i].push(
                <>
                    <p>
                        <u>Embarque:</u> Rua Dr. Antonio Augusto de Almeida, 530
                        - Campinas/SP
                    </p>
                    <p>
                        <u>Destino:</u> Rua Dr. Antonio Augusto de Almeida, 530
                        - Campinas/SP
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

    const rows = createData()

    // return { headers, rows, DocumentToPrint }
    return { headers, rows }
}

export default useLogic

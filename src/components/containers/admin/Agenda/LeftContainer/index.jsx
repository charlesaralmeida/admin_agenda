import DateStaticInput from 'components/inputs/DateStaticInput'
import ServicoSelect from '../../../../selects/ServicoSelect'
import styles from './.module.css'
import useLogic from './useLogic'

const LeftContainer = () => {
    const {
        handleChange,
        data_selecionada,
        greenDays,
        redDays,
        yellowDays,
        currentMonth,
        lista_servicos,
        servico_selecionado,
    } = useLogic()

    return (
        <div className={styles.container}>
            <DateStaticInput
                handleChange={handleChange}
                state={data_selecionada}
                keyValue={'data'}
                greenDays={greenDays}
                redDays={redDays}
                yellowDays={yellowDays}
                currentMonth={currentMonth}
            />
            <ServicoSelect
                handleChange={handleChange}
                state={servico_selecionado}
                keyValue={'servico'}
                lista_servicos={lista_servicos}
            />
        </div>
    )
}

export default LeftContainer

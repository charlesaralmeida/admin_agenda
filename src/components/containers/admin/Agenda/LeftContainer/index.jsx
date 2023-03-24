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
        currentMonth,
        setMonth,
        tipo_servicos,
        servico,
    } = useLogic()
    return (
        <div className={styles.container}>
            <DateStaticInput
                handleChange={handleChange}
                state={data_selecionada}
                keyValue={'date'}
                greenDays={greenDays}
                redDays={redDays}
                currentMonth={currentMonth}
                setCurrentMonth={setMonth}
            />
            <ServicoSelect
                handleChange={handleChange}
                state={servico}
                keyValue={'servico'}
                servicos={tipo_servicos}
            />
        </div>
    )
}

export default LeftContainer

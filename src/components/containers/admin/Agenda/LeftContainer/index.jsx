import DateStaticInput from 'components/inputs/DateStaticInput'
import EmpresaSelect from 'components/selects/EmpresaSelect'
import styles from './.module.css'
import useLogic from './useLogic'

const LeftContainer = () => {
    const {
        handleChange,
        date,
        empresa,
        greenDays,
        redDays,
        currentMonth,
        setCurrentMonth,
    } = useLogic()
    return (
        <div className={styles.container}>
            <DateStaticInput
                handleChange={handleChange}
                state={date}
                keyValue={'date'}
                greenDays={greenDays}
                redDays={redDays}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
            />
            <EmpresaSelect
                handleChange={handleChange}
                state={empresa}
                keyValue={'empresa'}
            />
        </div>
    )
}

export default LeftContainer

import { compareDate } from '../../../utils'
import { PickersDay } from '@mui/x-date-pickers'
import styles from './.module.css'

const useLogic = (greenDays, redDays, state, handleChange, keyValue) => {
    const selected = state
    const isSelected = (day) => (compareDate(day, selected) ? true : false)

    const getMarkedDays = (day, markedDays) => {
        let result = false
        markedDays.forEach((date) => {
            if (compareDate(date, day)) {
                result = true
            }
        })
        return result
    }

    const renderDay = (day, currentMonth) => {
        let classStyle = ''
        if (getMarkedDays(day, redDays)) classStyle = styles.red
        if (getMarkedDays(day, greenDays)) classStyle = styles.green

        return (
            <PickersDay
                day={day}
                outsideCurrentMonth={false}
                key={day}
                showDaysOutsideCurrentMonth={false}
                onDaySelect={() => handleChange(keyValue, day)}
                selected={isSelected(day)}
            >
                <div className={classStyle}>
                    {day.getMonth() == currentMonth
                        ? new Date(day).getDate()
                        : null}
                </div>
            </PickersDay>
        )
    }

    return { renderDay }
}

export default useLogic

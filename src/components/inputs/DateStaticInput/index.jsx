import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { Box } from '@mui/system'
import ptBR from 'date-fns/locale/pt'
import styles from './.module.css'
import useLogic from './useLogic'

const DateStaticInput = ({
    keyValue,
    state,
    greenDays,
    redDays,
    currentMonth,
    handleChange,
}) => {
    const { renderDay } = useLogic(
        greenDays,
        redDays,
        state,
        handleChange,
        keyValue
    )

    return (
        <>
            <div role="date-input" className={styles.date_input}>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ptBR}
                >
                    <Box
                        sx={{
                            '& div > .MuiPickerStaticWrapper-content': {
                                minWidth: '100%',
                            },
                            '& div > .MuiPickerStaticWrapper-content > div > div':
                                {
                                    width: '100%',
                                    height: '100%',
                                },
                            '& div > .MuiPickerStaticWrapper-content > div > div > div':
                                {
                                    width: '100%',
                                },
                            '& div > div > div > div > div > .MuiPickersCalendarHeader-root > .MuiPickersCalendarHeader-labelContainer':
                                { fontSize: '0.7rem' },
                            '& div > div > div > div > div > .MuiPickersCalendarHeader-root > .MuiPickersArrowSwitcher-root > button > svg':
                                { fontSize: '1rem' },

                            '& div > div > div > div > div > .MuiCalendarPicker-viewTransitionContainer > div > div > .MuiDayPicker-header > .MuiDayPicker-weekDayLabel':
                                { fontSize: '0.7rem' },
                            '& div > div > div > div > div > .MuiCalendarPicker-viewTransitionContainer > div > div > .PrivatePickersSlideTransition-root > div > div > .MuiPickersDay-dayWithMargin':
                                { fontSize: '0.6rem' },
                        }}
                    >
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            value={state}
                            onChange={() => null}
                            renderInput={() => null}
                            inputFormat="dd/MM/yyyy"
                            renderDay={(day) => renderDay(day, currentMonth)}
                            onMonthChange={(day) =>
                                handleChange('mes', day.getMonth())
                            }
                        />
                    </Box>
                </LocalizationProvider>
            </div>
        </>
    )
}

export default DateStaticInput

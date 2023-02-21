import { useState } from 'react'

const useLogic = () => {
    const [empresa, setEmpresa] = useState('')
    const [date, setDate] = useState(Date.now)
    const [currentMonth, setCurrentMonth] = useState(
        new Date(Date.now()).getMonth()
    )

    const greenDays = [
        new Date(Date.parse('01 12 2023')),
        new Date(Date.parse('02 12 2023')),
        new Date(Date.parse('02 02 2023')),
        new Date(Date.parse('02 27 2023')),
        new Date(Date.parse('02 28 2023')),
    ]

    const redDays = [
        new Date(Date.parse('02 15 2023')),
        new Date(Date.parse('02 24 2023')),
        new Date(Date.parse('03 24 2023')),
    ]

    const handleChange = (field, value) => {
        if (field === 'empresa') setEmpresa(value)
        if (field === 'date') setDate(value)
    }

    return {
        handleChange,
        empresa,
        date,
        greenDays,
        redDays,
        currentMonth,
        setCurrentMonth,
    }
}

export default useLogic

import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import styles from './.module.css'

const EmpresaSelect = ({ handleChange, keyValue, state }) => {
    const label = 'Selecione a empresa'

    return (
        <div className={styles.select}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    value={state}
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'Unicamp'}>Unicamp</MenuItem>
                    <MenuItem value={'Mactur'}>Mactur</MenuItem>
                    <MenuItem value={'Itnerol'}>Itnerol</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default EmpresaSelect

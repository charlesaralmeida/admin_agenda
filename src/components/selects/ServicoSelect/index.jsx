import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import styles from './.module.css'

const ServicoSelect = ({ handleChange, keyValue, state, servicos }) => {
    const label = 'Selecione o serviço'

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
                    {servicos.map((servico, index) => (
                        <MenuItem value={index} key={index}>
                            {servico}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default ServicoSelect

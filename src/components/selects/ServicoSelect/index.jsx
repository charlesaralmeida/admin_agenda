import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import styles from './.module.css'

const ServicoSelect = ({ handleChange, keyValue, state, lista_servicos }) => {
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
                    {lista_servicos.map((servico, index) => (
                        <MenuItem value={servico.id} key={index}>
                            {servico.descricao}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default ServicoSelect

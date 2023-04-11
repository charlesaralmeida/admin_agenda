import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import styles from './.module.css'

const EmpresaSelect = ({ handleChange, keyValue, state, index, list }) => {
    return (
        <select
            value={state}
            onChange={(event) =>
                handleChange(keyValue, index, event.target.value)
            }
            className={styles.select}
        >
            <option value=""></option>
            {list.map((empresa, index) => (
                <option value={empresa.id} key={index}>
                    {empresa.nome}
                </option>
            ))}
        </select>
    )
}

export default EmpresaSelect

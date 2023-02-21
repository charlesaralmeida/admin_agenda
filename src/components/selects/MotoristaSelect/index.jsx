import styles from './.module.css'

const MotoristaSelect = ({ handleChange, keyValue, state, index }) => {
    return (
        <select
            value={state}
            onChange={(event) =>
                handleChange(keyValue, index, event.target.value)
            }
            className={styles.select}
        >
            <option value=""></option>
            <option value="Claudio">Claudio Cabreuva da Silva</option>
            <option value="Alberto">Alberto</option>
            <option value="Silas">Silas</option>
        </select>
    )
}

export default MotoristaSelect

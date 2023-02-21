import styles from './.module.css'

const FrotaSelect = ({ handleChange, keyValue, state, index }) => {
    return (
        <select
            value={state}
            onChange={(event) =>
                handleChange(keyValue, index, event.target.value)
            }
            className={styles.select}
        >
            <option value=""></option>
            <option value="617">C617</option>
            <option value="618">C18</option>
            <option value="619">C619</option>
        </select>
    )
}

export default FrotaSelect

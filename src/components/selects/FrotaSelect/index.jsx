import styles from './.module.css'

const FrotaSelect = ({ handleChange, keyValue, state, index, list }) => {
    return (
        <select
            value={state}
            onChange={(event) =>
                handleChange(keyValue, index, event.target.value)
            }
            className={styles.select}
        >
            <option value=""></option>
            {list.map((frota, index) => (
                <option value={index} key={index}>
                    {frota}
                </option>
            ))}
        </select>
    )
}

export default FrotaSelect
